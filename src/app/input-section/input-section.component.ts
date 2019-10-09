import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';
import {OperationService} from '../services/operation.service';

@Component({
  selector: 'app-input-section',
  templateUrl: './input-section.component.html',
  styleUrls: ['./input-section.component.scss']
})
export class InputSectionComponent implements OnInit, AfterViewInit {

  private operatorSign: string;
  public showErrorMessage = false;
  public showCharErrorMessage = false;
  @ViewChild('inputDescription', {static: false}) inputDescription: ElementRef;
  @ViewChild('inputNumber', {static: false}) inputNumber: ElementRef;
  @HostListener('keydown', ['$event'])
  onKeyPress(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      this.pushData();
      this.inputDescription.nativeElement.focus();
    }
  }
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
 public pushData() {
    // check if both the text description and value input fields have values in them
    if (this.inputDescription.nativeElement.value !== '' && this.inputNumber.nativeElement.value !== '') {
      this.operationService.processFigures(
        Number(this.inputNumber.nativeElement.value),
        this.inputDescription.nativeElement.value,
        this.operatorSign);
      this.inputDescription.nativeElement.value = '';
      this.inputNumber.nativeElement.value = '';

      if (this.showErrorMessage) {
        this.showErrorMessage = !this.showErrorMessage;
      }
    } else { this.showErrorMessage = true; }

  }

  public checkInputKeys(event) {

    // show the error message for characters that are not allowed
    this.showCharErrorMessage = event.key === '-' || event.key === '+';

    switch (event.key) {
      case 'e':
        event.preventDefault();
        break;
      case '-':
        event.preventDefault();
        break;
      case '+':
        event.preventDefault();
        break;
    }
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

  }
}
