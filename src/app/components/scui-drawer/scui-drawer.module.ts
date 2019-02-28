import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiDrawerComponent } from './scui-drawer.component';

@NgModule({
  declarations: [ScUiDrawerComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiDrawerComponent]
})
export class ScUiDrawerModule {
}
