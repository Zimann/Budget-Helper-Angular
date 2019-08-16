import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {OperationService} from '../operation.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit {

  private operatorSign: string;
  public totalIncome: number;
  @ViewChild('inputDescription', {static: false}) inputDescription: ElementRef;
  @ViewChild('inputNumber', {static: false}) inputNumber: ElementRef;
  constructor(private operationService: OperationService) { }

  // handle the operation sign (+ or -)
  getSelectOption(data) {
    if (data.target.value === '+') {
      this.operatorSign = '+';
      return this.operatorSign;
    }
    this.operatorSign = '-';
    return this.operatorSign;
  }

  // grab the field values (added number and description)
 public pushData() {
      this.operationService.processFigures(Number(this.inputNumber.nativeElement.value), this.operatorSign);
  }

  ngOnInit() {
  }

}
