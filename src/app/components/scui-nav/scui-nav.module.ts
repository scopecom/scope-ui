import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiNavComponent } from './scui-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScUiNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [ScUiNavComponent]
})
export class ScUiNavModule {
}
