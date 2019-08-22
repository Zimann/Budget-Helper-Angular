import {Component, Input, OnInit} from '@angular/core';
import {OperationService} from '../../operation.service';

@Component({
  selector: 'app-expense-overview',
  templateUrl: './expense-overview.component.html',
  styleUrls: ['./expense-overview.component.scss']
})
export class ExpenseOverviewComponent implements OnInit {

  public addedEntries = this.operationService.expenseEntries;

  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

}
