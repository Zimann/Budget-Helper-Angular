import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.scss']
})
export class IncomeItemComponent implements OnInit {

  @Input() incomeValues: {}[];

  constructor() { }

  ngOnInit() {
  }

}
