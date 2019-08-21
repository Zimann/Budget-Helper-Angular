import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {OperationService} from '../../../operation.service';

@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.scss']
})
export class IncomeItemComponent implements OnInit {
  @Input() incomeValues: {}[];

  @ViewChild('itemValue', {static: false}) itemValue: ElementRef;
  @HostListener('mouseenter', ['$event']) onMouseEnter() {
    console.log(this.operationService.hoverIncome());
    console.log(event.currentTarget);
    // console.log(this.itemValue.nativeElement.innerText);
  }
  constructor(private operationService: OperationService) { }


  ngOnInit() {
  }

}
