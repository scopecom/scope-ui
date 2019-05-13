import { Component, ElementRef, EventEmitter, Input, Optional, Output, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';


@Component({
  selector: 'scui-input',
  template: `
    <div class="scui-input {{styleClass}} {{inputState}}" [ngClass]="{'scui-error': !control.pristine && (control?.errors != null)}">
      <label class="scui-input-label">
        <div>
          {{label}}
        </div>
        <input [type]="inputType"
               (input)="save($event)"
               (focus)="inputState = 'scui-focus'"
               (blur)="inputState = ''"
               class="scui-input form-control">
        <span *ngIf="maxLength" class="scui-input-counter">{{value.length}} / {{maxLength}}</span>
      </label>
      <div class="scui-input-messages">
        <div *ngIf="maxLength && !control?.errors">Max {{maxLength}} chars</div>
        <div *ngIf="control.errors?.maxlength">Greska</div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ScUiInputComponent implements ControlValueAccessor {
  value: string;
  inputState: string;

  @Input() inputType = 'text';
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
