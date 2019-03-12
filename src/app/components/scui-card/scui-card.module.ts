import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiCardComponent } from './scui-card.component';

@NgModule({
  declarations: [ScUiCardComponent],
  exports: [ScUiCardComponent],
  imports: [
    CommonModule
  ]
})
export class ScUiCardModule {
}
