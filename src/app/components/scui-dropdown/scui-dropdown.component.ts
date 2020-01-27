import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ScUiOption} from '../../interfaces';

@Component({
  selector: 'scui-dropdown',
  template: `
    <div [ngClass]="{'dropdown-expanded': isOpen}" (blur)="onBlurMethod()" tabindex="0" class="scui-dropdown">
      <div (click)="toggle()" class="main">{{ selectedOption.label }}
        <span *ngIf="!isOpen" class="icon icon-small-down"></span>
        <span *ngIf="isOpen" class="icon icon-small-up"></span>
      </div>
      <div *ngIf="isOpen" class="options">
        <div (click)="toggle(); selectOption(option);"
             class="option"
             *ngFor="let option of options">
          <span>{{ option.label }}</span>
        </div>
        <div class="disclaimerText" *ngIf="disclaimerText" innerHtml="{{ disclaimerText }}"></div>
      </div>
    </div>`,
})
export class ScUiDropdownComponent implements OnInit {
  @Input() options: ScUiOption[];
  @Input() selectedOption: ScUiOption;
  @Input() disclaimerText: ScUiOption;
  @Output() onSelectedOption = new EventEmitter<ScUiOption>();
  isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
    this.selectedOption = this.selectedOption || this.options[0];
    console.log(this.disclaimerText);
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onBlurMethod() {
    this.isOpen = false;
  }

  selectOption(option) {
    this.selectedOption = option;
    this.onSelectedOption.emit(this.selectedOption);
  }

}
