import {Component, Input, OnInit} from '@angular/core';
import {OperationService} from '../../../operation.service';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss']
})
export class ExpenseItemComponent implements OnInit {

  accumulatedExpenseValue$ = this.operationService.expenseValue$;
  @Input() expenseValues: {}[];

  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

}
