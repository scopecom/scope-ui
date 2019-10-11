import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScUiLargeButtonComponent} from './scui-large-button/scui-large-button/scui-large-button.component';
import {ScUiLargeButtonIconComponent} from './scui-large-button/scui-large-button-icon/scui-large-button.component';
import {ScUiSmallButtonComponent} from './scui-small-button/scui-small-button/scui-large-button.component';
import {ScUiSmallButtonIconComponent} from './scui-small-button/scui-small-button-icon/scui-large-button.component';

@NgModule({
  declarations: [
    ScUiLargeButtonComponent,
    ScUiLargeButtonIconComponent,
    ScUiSmallButtonComponent,
    ScUiSmallButtonIconComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScUiLargeButtonComponent,
    ScUiLargeButtonIconComponent,
    ScUiSmallButtonComponent,
    ScUiSmallButtonIconComponent
  ]
})
export class ScUiButtonsModule {
}
