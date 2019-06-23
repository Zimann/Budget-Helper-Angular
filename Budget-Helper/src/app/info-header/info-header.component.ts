import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.scss']
})
export class InfoHeaderComponent implements OnInit {
  currentMonth: string;
  monthArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  constructor() { }

  ngOnInit() {
    this.processCurrentDate();
  }

  processCurrentDate() {
    this.currentMonth = this.monthArray[new Date().getMonth()];
  }

}
