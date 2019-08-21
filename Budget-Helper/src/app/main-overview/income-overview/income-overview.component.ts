import { Component, OnInit } from '@angular/core';
import {OperationService} from '../../operation.service';

@Component({
  selector: 'app-income-overview',
  templateUrl: './income-overview.component.html',
  styleUrls: ['./income-overview.component.scss']
})
export class IncomeOverviewComponent implements OnInit {

  public addedEntries = this.operationService.incomeEntries;
  constructor(private operationService: OperationService) { }

  ngOnInit() {
  }

}
