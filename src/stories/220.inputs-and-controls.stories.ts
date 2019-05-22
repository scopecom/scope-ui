import 'hammerjs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ScUiFormControlsModule} from '../app/components/form-controls/form-controls.module';
import {ScuiDropdownModule} from '../app/components/scui-dropdown/scui-dropdown.module';
import {ScUiProjectSelectorModule} from '../app/components/scui-project-selector/scui-project-selector.module';
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
const fromGroup = new FormBuilder().group({
  name: ['', [Validators.maxLength(10)]]
});

storiesOf('Inputs and Controls', module)
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
      ScUiFormControlsModule,
      ScUiProjectSelectorModule,
      ScuiDropdownModule
    ]
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
    template: `<form [formGroup]="myForm"><div style="margin: 20px; width:400px" class="scui-form-field">
                  <scui-input formControlName="name" [maxLength]="maxLength" [label]="label"></scui-input>
               </div>
               </form>`,
    props: {
      label: 'Project Title*',
      maxLength: 10,
      myForm: fromGroup
    }
  }))
  .add('Scope Textarea', () => ({
    template: `<div style="padding:20px; width:400px;background: white;" class="scui-form-field">
                 <form [formGroup]="myForm">
                   <scui-textarea 
                   formControlName="name" 
                   [maxLength]="maxLength" 
                   [label]="label">This is the error message</scui-textarea>
                 </form>
               </div>
               `,
    props: {
      label: 'Project Title*',
      maxLength: 10,
      myForm: fromGroup
    }
  }))
  .add('Scope Textarea disabled', () => ({
    template: `<div style="padding:20px; width:400px;background: white;" class="scui-form-field">
                 <form [formGroup]="myForm">
                   <scui-textarea 
                   formControlName="name" 
                   [disabled]="disabled" 
                   [maxLength]="maxLength" 
                   [label]="label">This is the error message</scui-textarea>
                 </form>
               </div>
               `,
    props: {
      label: 'Project Title*',
      maxLength: 10,
      myForm: fromGroup,
      disabled: true
    }
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
  }))
  .add('Standard select', () => ({
    template: `<div style="padding:40px; background:white; ">
                  <scui-dropdown [selectedOption]="selectedOption" [options]="options"></scui-dropdown>
               </div>`,
    props: {
      options: [{
        label: 'One',
        id: 1
      }, {
        label: 'Two',
        id: 2
      }, {
        label: 'Three',
        id: 3
      }],
      selectedOption: {
        label: 'Select Project',
        id: 0
      }
    }
  }))
  .add('Project selector', () => ({
    template: `<div style="padding:40px; background:white; ">
                    <scui-project-selector [options]="options"></scui-project-selector>
               </div>`,
    props: {
      options: [{
        label: 'Internal 03/19',
        id: 1
      }, {
        label: 'Sales - Product Update',
        id: 2
      }, {
        label: 'Campaign expovina',
        id: 3
      }]
    }
  }));
