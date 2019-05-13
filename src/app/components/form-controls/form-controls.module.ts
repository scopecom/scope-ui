import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScUiInputComponent } from './scui-input/scui-input.component';
import { ScUiTextareaComponent } from './scui-input/scui-textarea.component';


@NgModule({
  declarations: [
    ScUiInputComponent,
    ScUiTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ScUiInputComponent,
    ScUiTextareaComponent
  ],
})
export class ScUiFormControlsModule {
}
