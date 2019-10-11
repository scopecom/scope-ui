import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TimepickerModule} from 'ngx-bootstrap/timepicker';
import {ScUiInputComponent} from './scui-input/scui-input.component';
import {ScUiTextareaComponent} from './scui-input/scui-textarea.component';
import {FormContainerComponent} from './form-container/form-container.component';
import {ScUiTimePickerComponent} from './scui-time-picker/scui-time-picker';
import {ScUiCheckboxComponent} from './scui-checkbox/scui-checkbox.component';

@NgModule({
  declarations: [
    ScUiInputComponent,
    ScUiTextareaComponent,
    FormContainerComponent,
    ScUiTimePickerComponent,
    ScUiCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TimepickerModule.forRoot()
  ],
  exports: [
    ScUiInputComponent,
    ScUiTextareaComponent,
    FormContainerComponent,
    ScUiTimePickerComponent,
    ScUiCheckboxComponent
  ],
})
export class ScUiFormControlsModule {
}
