import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  private incomeSubj = new BehaviorSubject<number> (0);
  private expenseSubj = new BehaviorSubject<number> (0);
  private totalSubj = new BehaviorSubject<number> (0);

  // exposed observables from the above BehaviorSubjects
  public incomeValue$ = this.incomeSubj.asObservable();
  public expenseValue$ = this.expenseSubj.asObservable();
  public totalValue$ = this.totalSubj.asObservable();
  public totalValue = 0;
  public incomeValue = 0;
  public expenseValue = 0;

  constructor() { }

  public processFigures(inputValue: number, operatorSign = '+'): void {
    if (operatorSign === '+') {
      this.incomeValue += inputValue;
      this.incomeSubj.next(this.incomeValue);
    } else {
      this.expenseValue -= inputValue;
      this.expenseSubj.next(this.expenseValue);
    }
    this.totalValue = this.incomeValue + this.expenseValue;
    this.totalSubj.next(this.totalValue);
  }
}
