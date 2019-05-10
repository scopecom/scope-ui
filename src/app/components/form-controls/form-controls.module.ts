import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiInputComponent } from './scui-input/sc-input.component';
import { FormContainerComponent } from './form-container/form-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ScUiInputComponent,
    FormContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ScUiInputComponent,
    FormContainerComponent
  ],
})
export class FormControlsModule {
}
