import { Component, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ScUiInputComponent } from './scui-input.component';

@Component({
  selector: 'scui-textarea',
  template: `
    <div class="scui-input {{styleClass}} {{inputState}}" [ngClass]="{'scui-error': !control.pristine && (control?.errors != null)}">
      <label class="scui-input-label">
        <div>
          {{label}}
        </div>
        <textarea
          (input)="save($event)"
          (focus)="inputState = 'scui-focus'"
          (blur)="inputState = ''"
          class="scui-input form-control"></textarea>
        <span *ngIf="maxLength" class="scui-input-counter">{{value.length}} / {{maxLength}}</span>
      </label>
      <div class="scui-input-messages">
        <div *ngIf="maxLength && !control?.errors">Max {{maxLength}} chars</div>
        <div *ngIf="control.errors?.maxlength">Greska</div>
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class ScUiTextareaComponent extends ScUiInputComponent {
  constructor(@Self() @Optional() public control: NgControl) {
    super(control);
  }
}
