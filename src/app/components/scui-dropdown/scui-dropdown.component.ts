import { Component, OnInit, Input } from '@angular/core';

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
  @Input() options: any[];
  isOpen: boolean;
  selectedOption: any;

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
  }

}
