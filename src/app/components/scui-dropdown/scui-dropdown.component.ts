import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'scui-scui-dropdown',
  template: `
    <div class="scui-dropdown">
      <div (click)="isOpen = true" class="main">dropdown</div>
      <div *ngIf="isOpen" class="options">
        <div *ngFor="let option of options">{{ option.label }}</div>
      </div>
    </div>`,
})
export class ScUiDropdownComponent implements OnInit {
  @Input() options: [];
  isOpen: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
