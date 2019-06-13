import 'hammerjs';
import {moduleMetadata, storiesOf} from '@storybook/angular';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
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
const ctrl1 = new FormControl(new Date());
const ctrl2 = new FormControl(new Date());

ctrl1.disable();

const fromGroup = new FormBuilder().group({
  name: ['', [Validators.maxLength(10)]]
});

const fromGroup2 = new FormBuilder().group({
  name: ['', [Validators.maxLength(50)]]
});

const vreme: Date = new Date();

storiesOf('Inputs and Controls', module)
  .addDecorator(moduleMetadata({
    imports: [
      NoopAnimationsModule,
      MatCheckboxModule,
      MatAutocompleteModule,
      FormsModule,
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
    template: `<div style="padding: 20px 0 60px 20px;background: white;">
                   <scui-checkbox [groupLabel]="groupLabel" [label]="label" ></scui-checkbox>
               </div>`,
    props: {
      checked: true,
      groupLabel: 'CHECKBOX GROUP',
      label: 'Enabled'
    }
  }))
  .add('Checkbox disabled', () => ({
    template: `<div style="padding: 20px 0 60px 20px;background: white;" >
                   <scui-checkbox [groupLabel]="groupLabel"  [disabled]="disabled" [label]="label" ></scui-checkbox>
               </div>`,
    props: {
      disabled: true,
      groupLabel: 'CHECKBOX GROUP',
      label: 'Disabled'
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
    template: `<div style="background: white;padding: 20px; width:400px">
                 <form [formGroup]="myForm">
                 <div class="scui-form-field">
                  <scui-input formControlName="name" [maxLength]="maxLength" [label]="label"></scui-input>
                 </div>
               </form>
               </div>`,
    props: {
      label: 'FORM FIELD*',
      maxLength: 10,
      myForm: fromGroup
    }
  }))
  .add('Scope Form field disabled', () => ({
    template: `<div style="background: white;padding: 20px; width:400px">
                 <form [formGroup]="myForm">
                 <div class="scui-form-field">
                  <scui-input formControlName="name" [styleClass]="styleClass" [label]="label"></scui-input>
                 </div>
               </form>
               </div>`,
    props: {
      label: 'FORM FIELD*',
      styleClass: 'disabled',
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
  .add('Password field', () => ({
    template: `<div style="background: white;padding: 20px; width:400px">
                 <form [formGroup]="myForm">
                 <div class="scui-form-field">
                  <scui-input formControlName="name" [maxLength]="maxLength" [inputType]="inputType" [label]="label"></scui-input>
                 </div>
               </form>
               </div>`,
    props: {
      label: 'PASSWORD*',
      inputType: 'password',
      maxLength: 50,
      myForm: fromGroup2
    }
  }))
  .add('Password field invalid', () => ({
    template: `<div style="background: white;padding: 20px; width:400px">
                 <form [formGroup]="myForm">
                 <div class="scui-form-field">
                  <scui-input formControlName="name" [maxLength]="maxLength" [inputType]="inputType" [label]="label" [isInvalid]="isInvalid"></scui-input>
                 </div>
               </form>
               </div>`,
    props: {
      label: 'PASSWORD*',
      inputType: 'password',
      isInvalid: true,
      maxLength: 50,
      myForm: fromGroup2
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
    template: `<div style="padding: 20px;background:white;" class="scui-radio-button">
                   <label class="example-radio-group-label">Pick your favorite season</label>
                    <mat-radio-group
                      aria-labelledby="example-radio-group-label"
                      class="example-radio-group"
                      [(ngModel)]="favoriteSeason">
                      <mat-radio-button class="example-radio-button" *ngFor="let season of seasons">
                        {{season}}
                      </mat-radio-button>
                    </mat-radio-group>
               </div>`,
    props: {
      seasons: ['Winter', 'Spring', 'Summer', 'Autumn']
    }
  }))
  .add('Radio button disabled', () => ({
    template: `<div style="padding: 20px;background:white;" class="scui-radio-button">
                   <label class="example-radio-group-label">Pick your favorite season</label>
                    <mat-radio-group
                      aria-labelledby="example-radio-group-label"
                      class="example-radio-group"
                      [(ngModel)]="favoriteSeason">
                      <mat-radio-button [disabled]="true" class="example-radio-button" *ngFor="let season of seasons">
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
  })).add('Timepicker', () => ({
  template: `<div style="padding:40px; background:white;">
                    <scui-time-picker [formControl]="myControl"></scui-time-picker>
             </div>`,
  props: {
    myControl: ctrl2
  }
})).add('Timepicker disabled', () => ({
  template: `<div style="padding:40px; background:white;">
                    <scui-time-picker [formControl]="myControl">d</scui-time-picker>
             </div>`,
  props: {
    myControl: ctrl1
  }
}));
