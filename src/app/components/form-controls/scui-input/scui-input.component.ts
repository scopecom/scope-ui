import { Component, EventEmitter, Input, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'scui-input',
  template: `
    <div class="scui-input scui-error {{styleClass}} {{inputState}}"
         [ngClass]="{'scui-error': !control?.pristine && (control?.errors != null) || isInvalid}">
      <div>
        <div class="scui-input-label">
          {{label}}
        </div>
        <input [type]="inputType"
               (input)="save($event)"
               (focus)="inputState = 'scui-focus'"
               (blur)="inputState = ''"
               [value]="value"
               class="scui-input-field">
        <div *ngIf="maxLength &&!control?.errors?.maxlength && inputType !== 'password'" class="scui-input-counter">
          <div>Max {{maxLength}} chars</div>
          <div>{{value?.length || 0 }}/{{maxLength}}</div>
        </div>
      </div>
      <div class="scui-input-messages">
        <div *ngIf="control?.errors?.maxlength || isInvalid">This is the error message</div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ScUiInputComponent implements ControlValueAccessor {
  value: string;
  inputState: string;

  @Input() inputType = 'text';
  @Input() isInvalid: boolean;
  @Input() styleClass: string;
  @Input() maxLength: number;
  @Input() label: string;

  @Output() valueChange = new EventEmitter<string>();

  constructor(@Self() @Optional() public control: NgControl) {
    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  propagateChange = (_: any) => {
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {
  }

  save(event: any) {
    this.value = event.target.value;
    this.propagateChange(this.value);
  }
}
