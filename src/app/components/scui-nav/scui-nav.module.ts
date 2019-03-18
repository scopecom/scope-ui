import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiNavComponent } from './scui-nav.component';
import { RouterModule } from '@angular/router';
import { BgHoverModule } from '../../directives/bg-hover.module';

@NgModule({
  declarations: [ScUiNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    BgHoverModule
  ],
  exports: [ScUiNavComponent]
})
export class ScUiNavModule { }
