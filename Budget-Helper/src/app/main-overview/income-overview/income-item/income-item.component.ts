import {Component, Input, OnInit} from '@angular/core';
import {OperationService} from '../../../operation.service';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.scss']
})
export class IncomeItemComponent implements OnInit {

  accumulatedIncomeValue$ = this.operationService.incomeValue$;
  @Input() incomeValues: {}[];
  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

}
