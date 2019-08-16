import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {OperationService} from '../operation.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit, AfterViewInit {

  private operatorSign: string;
  public showErrorMessage = false;
  @ViewChild('inputDescription', {static: false}) inputDescription: ElementRef;
  @ViewChild('inputNumber', {static: false}) inputNumber: ElementRef;
  constructor(private operationService: OperationService) { }

  // handle the operation sign (+ or -)
  getSelectOption(data) {
    this.showErrorMessage = false;
    if (data.target.value === '+') {
      this.operatorSign = '+';
      return this.operatorSign;
    }
    this.operatorSign = '-';
    return this.operatorSign;
  }

  // grab the field values (added number and description)
 public pushData(key = null) {
    console.log(key);
    // check if both the text description and value input fields have values in them
    if (this.inputDescription.nativeElement.value !== '' && this.inputNumber.nativeElement.value !== '') {
      this.operationService.processFigures(Number(this.inputNumber.nativeElement.value), this.operatorSign);
      this.inputDescription.nativeElement.value = '';
      this.inputNumber.nativeElement.value = '';
      if (this.showErrorMessage) {
        this.showErrorMessage = !this.showErrorMessage;
      }
    } else { this.showErrorMessage = true; }

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }
}
