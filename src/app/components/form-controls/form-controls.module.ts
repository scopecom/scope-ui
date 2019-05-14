import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScUiInputComponent } from './scui-input/scui-input.component';
import { ScUiTextareaComponent } from './scui-input/scui-textarea.component';
import {FormContainerComponent} from './form-container/form-container.component';


@NgModule({
  declarations: [
    ScUiInputComponent,
    ScUiTextareaComponent,
    FormContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ScUiInputComponent,
    ScUiTextareaComponent,
    FormContainerComponent
  ],
})
export class ScUiFormControlsModule {
}
