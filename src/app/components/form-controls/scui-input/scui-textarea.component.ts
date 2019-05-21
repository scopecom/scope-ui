import {Component, Optional, Self, Input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {ScUiInputComponent} from './scui-input.component';

@Component({
  selector: 'scui-textarea',
  template: `
    <div class="scui-textarea {{styleClass}}"
         [ngClass]="{'error': !control.pristine && (control?.errors != null),disabled:disabled}">
      <div class="scui-input-label">
        {{label}}
      </div>
      <div class="textarea-field-wrap">
              <textarea
                [disabled]="disabled"
                (input)="save($event)"
                [value]="value"
                class="textarea-field"></textarea>
      </div>
      <div *ngIf="maxLength &&!control?.errors?.maxlength && !disabled" class="scui-input-counter">
        <div>Max {{maxLength}} chars</div>
        <div>{{value?.length || 0 }} / {{maxLength}}</div>
      </div>
      <div class="textarea-error" *ngIf="control?.errors?.maxlength && !disabled">
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class ScUiTextareaComponent extends ScUiInputComponent {
  @Input() disabled: boolean;
  @Input() styleClass: string;

  constructor(@Self() @Optional() public control: NgControl) {
    super(control);
  }
}
