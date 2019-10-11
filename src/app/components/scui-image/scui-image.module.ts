import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiImageComponent } from './scui-image.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScUiImageComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ScUiImageComponent]
})
export class ScUiImageModule { }
