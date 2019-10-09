import {Component, OnDestroy} from '@angular/core';
import {OperationService} from './services/operation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'Budget-Helper';

  constructor(private operationService: OperationService) {}

  ngOnDestroy() {
    this.operationService.expenseItems$.unsubscribe();
    this.operationService.incomeItems$.unsubscribe();
  }
}
