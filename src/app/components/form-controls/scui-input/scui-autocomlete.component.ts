import { Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'scui-autocomplete',
  template: `
    <div class="scui-input scui-error {{styleClass}} {{inputState}}"
         [ngClass]="{'scui-error': !control?.pristine && (control?.errors != null) || isInvalid}">
      <div>
        <div class="scui-input-label" *ngIf="label">
          {{label}}
        </div>
        <input [type]="inputType"
               [placeholder]="placeholder"
               (input)="save($event)"
               (focus)="inputState = 'scui-focus'; showAutocomplete = true;"
               (blur)="inputState = ''; onTouched($event)"
               [value]="value"
               class="scui-input-field">
        <div class="scui-autocomplete-box scui-submenu" *ngIf="showAutocomplete">
          <ul class="submenu-nav">
            <li class="submenu-nav-item " *ngFor="let option of autocompleteList" (click)="setInputValue(option.value)">
              <a class="list-item" (keydown.enter)="setInputValue(option.value)" tabindex="0">{{option.label}}</a>
            </li>
          </ul>
        </div>
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
export class ScUiAutocomleteComponent implements ControlValueAccessor, OnInit {
  value: string;
  inputState: string;
  showAutocomplete = false;
  autocompletInput: { value: any, label: string }[];

  @Input() inputType = 'text';
  @Input() isInvalid: boolean;
  @Input() styleClass: string;
  @Input() placeholder = '';
  @Input() maxLength: number;
  @Input() label: string;
  @Input() autocompleteList: { value: any, label: string }[];


  @Output() valueChange = new EventEmitter<string>();

  constructor(@Self() @Optional() public control: NgControl) {
    if (this.control != null) {
      this.control.valueAccessor = this;
    }
  }

  ngOnInit() {
    this.autocompletInput = this.autocompleteList;
  }

  writeValue(value: any) {
    this.value = value;
  }

  setInputValue(value) {
    this.value = value;
    this.propagateChange(this.value);
    this.propagateChangeTouched(this.value);
    this.showAutocomplete = false;
  }

  propagateChange = (_: any) => {
  };

  propagateChangeTouched = (_: any) => {
  };

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.propagateChangeTouched = fn;
  }

  save(event: any) {
    this.value = event.target.value;
    this.propagateChange(this.value);
    this.autocompleteList = this.autocompletInput.filter(item => {
      return item.value.toLowerCase().indexOf(this.value.toLowerCase()) > -1
    })
  }

  onTouched(event: any) {
    this.value = event.target.value;
    this.propagateChangeTouched(this.value);
  }
}
