import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {OperationService} from '../operation.service';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfoHeaderComponent implements OnInit {
  public income$ = this.operationService.incomeValue$;
  public expense$ = this.operationService.expenseValue$;
  public total$ = this.operationService.totalValue$;
  public totalPercentage$ = this.operationService.totalPercentageValue$;
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
