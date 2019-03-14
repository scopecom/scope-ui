import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiCardComponent } from './scui-card.component';
import { BgHoverModule } from '../../directives/bg-hover.module';

@NgModule({
  declarations: [ScUiCardComponent],
  exports: [ScUiCardComponent],
  imports: [
    CommonModule,
    BgHoverModule
  ]
})
export class ScUiCardModule {
}
