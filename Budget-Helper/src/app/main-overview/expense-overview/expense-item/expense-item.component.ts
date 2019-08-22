import {Component, Input, OnInit} from '@angular/core';
import {OperationService} from '../../../operation.service';
import {InputItemModel} from '../../../models/input-item.model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss']
})
export class ExpenseItemComponent {

  accumulatedExpenseValue$ = this.operationService.expenseValue$;
  @Input() expenseValues: InputItemModel;

  constructor(private operationService: OperationService) { }

  removeExpenseItem(index) {

    // update the total values and the income values accordingly when removing the income items
    this.operationService.totalValue += Number(this.operationService.expenseEntries[index].value);
    this.operationService.expenseValue += Number(this.operationService.expenseEntries[index].value);

    // emit updated values for the observables
    this.operationService.totalSubj.next(this.operationService.totalValue);
    this.operationService.expenseSubj.next(this.operationService.expenseValue);

    // remove the item from the array
    this.operationService.expenseEntries.splice(index, 1);

    // update the general percentage
    this.operationService.totalPercentageSubj.next(
      Number(
        ((this.operationService.expenseValue / this.operationService.incomeValue) * 100)
          .toFixed(2)
    ));
  }
}
