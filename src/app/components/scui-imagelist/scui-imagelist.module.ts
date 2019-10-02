
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiImageListComponent } from './scui-imagelist.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScUiImageListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ScUiImageListComponent]
})
export class ScUiImageListModule { }
