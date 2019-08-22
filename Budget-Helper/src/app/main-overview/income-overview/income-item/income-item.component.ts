import {Component, Input, OnInit} from '@angular/core';
import {OperationService} from '../../../operation.service';
import {InputItemModel} from '../../../models/input-item.model';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.scss']
})
export class IncomeItemComponent {

  accumulatedIncomeValue$ = this.operationService.incomeValue$;
  @Input() incomeValues: InputItemModel;
  constructor(private operationService: OperationService) { }

  removeIncomeItem(index) {

    // update the total values and the income values accordingly when removing the income items
    this.operationService.totalValue -= Number(this.operationService.incomeEntries[index].value);
    this.operationService.incomeValue -= Number(this.operationService.incomeEntries[index].value);

    // emit updated values for the observables
    this.operationService.totalSubj.next(this.operationService.totalValue);
    this.operationService.incomeSubj.next(this.operationService.incomeValue);

    // remove the item from the array
    this.operationService.incomeEntries.splice(index, 1);

    // update the general percentage
    // if (this.operationService.totalValue > 0) {
    this.operationService.totalPercentageSubj.next(
        Number(
          ((this.operationService.expenseValue / this.operationService.incomeValue) * 100)
            .toFixed(2)
        ));
    }
}
