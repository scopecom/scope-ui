import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiCardComponent } from './scui-card.component';
import { BgHoverModule } from '../../directives/bg-hover.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScUiCardComponent],
  exports: [ScUiCardComponent],
  imports: [
    CommonModule,
    BgHoverModule,
    RouterModule
  ]
})
export class ScUiCardModule {
}
