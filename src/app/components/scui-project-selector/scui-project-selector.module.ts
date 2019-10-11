import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScUiProjectSelectorComponent} from './scui-project-selector.component';
import {ScuiDropdownModule} from '../scui-dropdown/scui-dropdown.module';

@NgModule({
  declarations: [ScUiProjectSelectorComponent],
  imports: [
    CommonModule,
    ScuiDropdownModule
  ],
  exports: [ScUiProjectSelectorComponent]
})
export class ScUiProjectSelectorModule {
}
