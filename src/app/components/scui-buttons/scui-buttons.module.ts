import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiLargeButtonComponent } from './scui-large-button/scui-large-button/scui-large-button.component';
import {ScUiLargeButtonIconComponent} from './scui-large-button/scui-large-button-icon/scui-large-button.component';

@NgModule({
  declarations: [ScUiLargeButtonComponent, ScUiLargeButtonIconComponent],
  imports: [
    CommonModule
  ],
  exports:[ScUiLargeButtonComponent, ScUiLargeButtonIconComponent]
})
export class ScUiButtonsModule { }
