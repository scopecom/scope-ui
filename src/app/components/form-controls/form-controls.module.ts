import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiInputComponent } from './scui-input/sc-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ScUiInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ScUiInputComponent
  ],
})
export class FormControlsModule {
}
