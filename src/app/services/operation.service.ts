import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';
import {InputItemModel} from '../models/input-item.model';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  public incomeSubj = new BehaviorSubject<number> (0);
  public expenseSubj = new BehaviorSubject<number> (0);
  public totalSubj = new BehaviorSubject<number> (0);
  public totalPercentageSubj = new BehaviorSubject<number>(0);

  private expenseItems = [];
  private incomeItems = [];
  public expenseItems$ = of(this.expenseItems).subscribe(val => this.expenseEntries = val);
  public incomeItems$ = of(this.incomeItems).subscribe(val => this.incomeEntries = val);
  public expenseEntries: InputItemModel[];
  public incomeEntries: InputItemModel[];
  public totalValue = 0;
  public incomeValue = 0;
  public expenseValue = 0;

  constructor() { }

  public processFigures(inputValue: number, inputText: string, operatorSign = '+'): void {
    if (operatorSign === '+') {
      this.incomeValue += inputValue;
      this.incomeSubj.next(this.incomeValue);
      this.incomeItems.push({description: inputText, value: inputValue});
    } else {
      this.expenseValue -= inputValue;
      this.expenseSubj.next(-this.expenseValue);
      this.expenseItems.push(
        {
          description: inputText,
          value: inputValue
        }
      );
    }
    this.totalValue = this.incomeValue + this.expenseValue;
    this.totalSubj.next(this.totalValue);
    this.totalPercentageSubj.next(
      Number(
        (
          (this.expenseValue / this.incomeValue) * 100
        )
          .toFixed(2)
      )
    );
  }
}
