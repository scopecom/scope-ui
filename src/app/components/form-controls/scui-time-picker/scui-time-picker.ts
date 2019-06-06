import {ChangeDetectorRef, Component, forwardRef, Input} from '@angular/core';
import {TimepickerComponent, TimepickerConfig} from 'ngx-bootstrap';
import {TimepickerActions, TimepickerStore} from 'ngx-bootstrap/timepicker';
import {ControlValueAccessorModel} from 'ngx-bootstrap/timepicker/models';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

export const TIMEPICKER2_CONTROL_VALUE_ACCESSOR: ControlValueAccessorModel = {
  provide: NG_VALUE_ACCESSOR,
  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: forwardRef(() => ScUiTimePickerComponent),
  multi: true
};


@Component({
  selector: 'scui-time-picker',
  providers: [TIMEPICKER2_CONTROL_VALUE_ACCESSOR, TimepickerStore],
  template: `
    <div class="scui-time-picker">
      <table>
        <tbody>
        <tr class="text-center" [hidden]="!showSpinners">
          <!-- increment hours button-->
          <td>
            <a class="btn btn-link" [class.disabled]="!canIncrementHours || !isEditable"
               (click)="changeHours(hourStep)"
            ><span class="bs-chevron bs-chevron-up"></span></a>
          </td>
          <!-- divider -->
          <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>
          <!-- increment minutes button -->
          <td *ngIf="showMinutes">
            <a class="btn btn-link" [class.disabled]="!canIncrementMinutes || !isEditable"
               (click)="changeMinutes(minuteStep)"
            ><span class="bs-chevron bs-chevron-up"></span></a>
          </td>
          <!-- divider -->
          <td *ngIf="showSeconds">&nbsp;</td>
          <!-- increment seconds button -->
          <td *ngIf="showSeconds">
            <a class="btn btn-link" [class.disabled]="!canIncrementSeconds || !isEditable"
               (click)="changeSeconds(secondsStep)">
              <span class="bs-chevron bs-chevron-up"></span>
            </a>
          </td>
          <!-- space between -->
          <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
          <!-- meridian placeholder-->
          <td *ngIf="showMeridian"></td>
        </tr>
        <tr [ngClass]="{timepickerDisabled:disabled}">
          <!-- hours -->
          <td [ngClass]="{hoursFocused:hoursFocused}" class="form-group" [class.has-error]="invalidHours">
            <input type="number" [class.is-invalid]="invalidHours"
                   class="form-control text-center bs-timepicker-field"
                   placeholder="HH"
                   maxlength="2"
                   [readonly]="readonlyInput"
                   [disabled]="disabled"
                   [value]="hours"
                   (focus)="toggleHours()"
                   (blur)="toggleHours()"
                   (wheel)="prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')"
                   (keydown.ArrowUp)="changeHours(hourStep, 'key')"
                   (keydown.ArrowDown)="changeHours(-hourStep, 'key')"
                   (change)="updateHours($event.target.value)"></td>
          <!-- divider -->
          <td *ngIf="showMinutes">&nbsp;:&nbsp;</td>
          <!-- minutes -->
          <td [ngClass]="{minutesFocused:minutesFocused}" class="form-group" *ngIf="showMinutes" [class.has-error]="invalidMinutes">
            <input type="number" [class.is-invalid]="invalidMinutes"
                   class="form-control text-center bs-timepicker-field"
                   placeholder="MM"
                   maxlength="2"
                   [readonly]="readonlyInput"
                   [disabled]="disabled"
                   [value]="minutes"
                   (focus)="toggleMinutes()"
                   (blur)="toggleMinutes()"
                   (wheel)="prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')"
                   (keydown.ArrowUp)="changeMinutes(minuteStep, 'key')"
                   (keydown.ArrowDown)="changeMinutes(-minuteStep, 'key')"
                   (change)="updateMinutes($event.target.value)">
          </td>
          <!-- divider -->
          <td *ngIf="showSeconds">&nbsp;:&nbsp;</td>
          <!-- seconds -->
          <td [ngClass]="" class="form-group" *ngIf="showSeconds" [class.has-error]="invalidSeconds">
            <input type="number" [class.is-invalid]="invalidSeconds"
                   class="form-control text-center bs-timepicker-field"
                   placeholder="SS"
                   maxlength="2"
                   [readonly]="readonlyInput"
                   [disabled]="disabled"
                   [value]="seconds"
                   (wheel)="prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')"
                   (keydown.ArrowUp)="changeSeconds(secondsStep, 'key')"
                   (keydown.ArrowDown)="changeSeconds(-secondsStep, 'key')"
                   (change)="updateSeconds($event.target.value)">
          </td>
          <!-- space between -->
          <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
          <!-- meridian -->
          <td *ngIf="showMeridian">
            <button type="button" class="btn btn-default text-center"
                    [disabled]="!isEditable || !canToggleMeridian"
                    [class.disabled]="!isEditable || !canToggleMeridian"
                    (click)="toggleMeridian()"
            >{{ meridian }}
            </button>
          </td>
        </tr>
        <tr class="text-center" [hidden]="!showSpinners">
          <!-- decrement hours button-->
          <td>
            <a class="btn btn-link" [class.disabled]="!canDecrementHours || !isEditable"
               (click)="changeHours(-hourStep)">
              <span class="bs-chevron bs-chevron-down"></span>
            </a>
          </td>
          <!-- divider -->
          <td *ngIf="showMinutes">&nbsp;&nbsp;&nbsp;</td>
          <!-- decrement minutes button-->
          <td *ngIf="showMinutes">
            <a class="btn btn-link" [class.disabled]="!canDecrementMinutes || !isEditable"
               (click)="changeMinutes(-minuteStep)">
              <span class="bs-chevron bs-chevron-down"></span>
            </a>
          </td>
          <!-- divider -->
          <td *ngIf="showSeconds">&nbsp;</td>
          <!-- decrement seconds button-->
          <td *ngIf="showSeconds">
            <a class="btn btn-link" [class.disabled]="!canDecrementSeconds || !isEditable"
               (click)="changeSeconds(-secondsStep)">
              <span class="bs-chevron bs-chevron-down"></span>
            </a>
          </td>
          <!-- space between -->
          <td *ngIf="showMeridian">&nbsp;&nbsp;&nbsp;</td>
          <!-- meridian placeholder-->
          <td *ngIf="showMeridian"></td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class ScUiTimePickerComponent extends TimepickerComponent {
  constructor(config: TimepickerConfig,
              private cd: ChangeDetectorRef,
              private store: TimepickerStore,
              private timepickerActions: TimepickerActions) {
    super(config, cd, store, timepickerActions);
  }

  hoursFocused = false;
  minutesFocused = false;
  showMeridian = false;

  toggleHours() {
    this.hoursFocused = !this.hoursFocused;
  }

  toggleMinutes() {
    this.minutesFocused = !this.minutesFocused;
  }
}
