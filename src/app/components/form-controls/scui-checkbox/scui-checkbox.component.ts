import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'scui-checkbox',
  template: `
    <div (click)="toggleCheckbox()" [ngClass]="{checked:checked,disabled:disabled}" class="scui-checkbox">
      <div class="group-label">{{ groupLabel }}</div>
      <div class="checkbox-wrap">
        <span class="checkbox-container">
          <span *ngIf="checked" class="icon icon-i-remove"></span>
        </span>
        <span class="checkbox-label">{{label}}</span>
      </div>
    </div>
  `,
})
export class ScUiCheckboxComponent implements OnInit {
  @Input() label: string;
  @Input() groupLabel: string;
  @Input() checked: boolean;
  @Input() disabled = true;
  @Input() value: any;

  @Output() onToggleCheckbox = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  toggleCheckbox() {
    this.checked = !this.checked;
    this.onToggleCheckbox.emit({
      checked: this.checked,
      value: this.value
    });
  }
}
