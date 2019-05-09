import 'hammerjs';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormControlsModule } from '../app/components/form-controls/form-controls.module';
import {
  MatAutocompleteModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatRadioModule,
  MatSliderModule,
  MatSlideToggleModule
} from '@angular/material';

const ctrl = new FormControl();

storiesOf('Form Controls', module)
  .addDecorator(moduleMetadata({
    imports: [
      NoopAnimationsModule,
      MatCheckboxModule,
      MatAutocompleteModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatRadioModule,
      MatSelectModule,
      MatSliderModule,
      MatSlideToggleModule,
      FormControlsModule
    ],
    providers: []
  }))
  .add('Autocomplete', () => ({
    template: `<div style="margin: 20px;" class="scui-autocomplete">
                  <form class="example-form">
                    <mat-form-field class="example-full-width">
                      <input type="text" placeholder="Pick one"
                       aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
                      <mat-autocomplete #auto="matAutocomplete">
                        <mat-option *ngFor="let option of options" [value]="option">
                          {{option}}
                        </mat-option>
                      </mat-autocomplete>
                    </mat-form-field>
                  </form>
               </div>`,
    props: {
      options: ['One', 'Two', 'Three'],
      myControl: ctrl
    }
  }))
  .add('Checkbox', () => ({
    template: `<div style="margin: 20px;" class="scui-checkbox">
                   <mat-checkbox [(ngModel)]="checked">Checked</mat-checkbox>
               </div>`,
    props: {
      checked: true,
    }
  }))
  .add('Datepicker', () => ({
    template: `<div style="margin: 20px;" class="scui-datepicker">
                   <mat-form-field>
                      <input matInput [matDatepicker]="picker" placeholder="Choose a date">
                      <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                      <mat-datepicker #picker></mat-datepicker>
                   </mat-form-field>
               </div>`
  }))
  .add('Scope Form field', () => ({
    template: `<div style="margin: 20px;" class="scui-form-field">
                  <div>
                  <scui-input></scui-input>
     <!--               <mat-form-field>
                      <input matInput placeholder="Input">
                    </mat-form-field>
                    <br>
                    <mat-form-field>
                      <textarea matInput placeholder="Textarea"></textarea>
                    </mat-form-field>
                    <br>
                    <mat-form-field>
                      <mat-select placeholder="Select">
                        <mat-option value="option">Option</mat-option>
                      </mat-select>
                    </mat-form-field>-->
                  </div>
               </div>`
  }))
  .add('Input', () => ({
    template: `<div style="margin: 20px;" class="scui-input">
                   <form class="example-form">
                      <mat-form-field class="example-full-width">
                        <input matInput placeholder="Favorite food" value="Sushi">
                      </mat-form-field>
                      <br>
                      <mat-form-field class="example-full-width">
                        <textarea matInput placeholder="Leave a comment"></textarea>
                      </mat-form-field>
                    </form>
               </div>`
  }))
  .add('Radio button', () => ({
    template: `<div style="margin: 20px;" class="scui-radio-button">
                   <label id="example-radio-group-label">Pick your favorite season</label>
                    <mat-radio-group
                      aria-labelledby="example-radio-group-label"
                      class="example-radio-group"
                      [(ngModel)]="favoriteSeason">
                      <mat-radio-button class="example-radio-button" *ngFor="let season of seasons">
                        {{season}}
                      </mat-radio-button>
                    </mat-radio-group>
                    <style>
                      .example-radio-group {
                        display: flex;
                        flex-direction: column;
                        margin: 15px 0;
                      }
                      .example-radio-button {
                        margin: 5px;
                      }
                   </style>
               </div>`,
    props: {
      seasons: ['Winter', 'Spring', 'Summer', 'Autumn']
    }
  }))
  .add('Select', () => ({
    template: `<div style="margin: 20px;" class="scui-select">
                 <mat-form-field>
                    <mat-label>Favorite food</mat-label>
                    <mat-select>
                      <mat-option *ngFor="let food of foods" [value]="food.value">
                        {{food.viewValue}}
                      </mat-option>
                    </mat-select>
                  </mat-form-field>
               </div>`,
    props: {
      foods: [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
      ]
    }
  }))
  .add('Slider', () => ({
    template: `<div style="margin: 20px;" class="scui-slider">
                  <mat-slider></mat-slider>
                  <style>
                  mat-slider {
                      width: 300px;
                    }
                   </style>
               </div>`
  }))
  .add('Slide toggle', () => ({
    template: `<div style="margin: 20px;padding:20px;width:300px;" class="scui-slide-toggle">
                  <mat-slide-toggle>Slide me!</mat-slide-toggle>
               </div>`
  }));
