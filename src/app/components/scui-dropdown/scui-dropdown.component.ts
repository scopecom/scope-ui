import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScUiOption } from '../../interfaces';

@Component({
  selector: 'scui-scui-dropdown',
  template: `
    <div class="scui-dropdown">
      <div (click)="toggle()" class="main">{{ selectedOption.label }}
        <span *ngIf="!isOpen" class="icon icon-small-down"></span>
        <span *ngIf="isOpen" class="icon icon-small-up"></span>
      </div>
      <div *ngIf="isOpen" class="options">
        <div (click)="toggle();selectOption(option);"
             class="option"
             [ngClass]="{hidden:option.id === selectedOption.id}"
             *ngFor="let option of options">
          <span>{{ option.label }}</span>
        </div>
      </div>
    </div>`,
})
export class ScUiDropdownComponent implements OnInit {
  @Input() options: ScUiOption[];
  @Input() selectedOption: ScUiOption;
  @Output() onSelectedOption = new EventEmitter<ScUiOption>();
  isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
    this.selectedOption = this.options[0];
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option) {
    this.selectedOption = option;
    this.onSelectedOption.emit(this.selectedOption);
  }

}
