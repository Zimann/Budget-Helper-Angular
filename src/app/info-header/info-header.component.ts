import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OperationService} from '../services/operation.service';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoHeaderComponent implements OnInit {
  public income$ = this.operationService.incomeSubj;
  public expense$ = this.operationService.expenseSubj;
  public total$ = this.operationService.totalSubj;
  public totalPercentage$ = this.operationService.totalPercentageSubj;
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

  processCurrentDate() {
    this.currentMonth = this.monthArray[new Date().getMonth()];
  }

}
