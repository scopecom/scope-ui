import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScUiInputComponent } from './scui-input/scui-input.component';
import { ScUiTextareaComponent } from './scui-input/scui-textarea.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { ScUiCheckboxComponent } from './scui-checkbox/scui-checkbox.component';
import { ScUiAutocomleteComponent } from './scui-input/scui-autocomlete.component';

@NgModule({
  declarations: [
    ScUiInputComponent,
    ScUiTextareaComponent,
    ScUiAutocomleteComponent,
    FormContainerComponent,
    ScUiCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ScUiInputComponent,
    ScUiTextareaComponent,
    ScUiAutocomleteComponent,
    FormContainerComponent,
    ScUiCheckboxComponent
  ],
})
export class ScUiFormControlsModule {
}
