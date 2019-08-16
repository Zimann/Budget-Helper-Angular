import {AfterViewInit, ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OperationService} from '../operation.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoHeaderComponent implements OnInit, AfterViewInit {
  public income = this.operationService.incomeValue$;
  public expense = this.operationService.expenseValue$;
  public total = this.operationService.totalValue$;
  currentMonth: string;
  monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  constructor(private operationService: OperationService) { }

  ngOnInit() {
    this.processCurrentDate();
  }

  ngAfterViewInit(): void {

  }

  processCurrentDate() {
    this.currentMonth = this.monthArray[new Date().getMonth()];
  }

}
