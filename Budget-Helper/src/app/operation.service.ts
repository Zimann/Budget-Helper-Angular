import {Injectable} from '@angular/core';
import {BehaviorSubject, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private incomeSubj = new BehaviorSubject<number> (0);
  private expenseSubj = new BehaviorSubject<number> (0);
  private totalSubj = new BehaviorSubject<number> (0);
  private totalPercentageSubj = new BehaviorSubject<number>(0);

  private expenseItems = [];
  private incomeItems = [];
  public expenseItems$ = of(this.expenseItems).subscribe(val => this.expenseEntries = val);
  public incomeItems$ = of(this.incomeItems).subscribe(val => this.incomeEntries = val);
  public expenseEntries: {}[];
  public incomeEntries: {}[];
  // exposed observables from the above BehaviorSubjects
  public incomeValue$ = this.incomeSubj.asObservable();
  public expenseValue$ = this.expenseSubj.asObservable();
  public totalValue$ = this.totalSubj.asObservable();
  public totalPercentageValue$ = this.totalPercentageSubj.asObservable();
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
      this.expenseItems.push({description: inputText, value: inputValue});
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
