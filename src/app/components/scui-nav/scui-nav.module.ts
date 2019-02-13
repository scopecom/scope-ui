import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScuiNavComponent } from './scui-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScuiNavComponent],
  imports: [CommonModule, RouterModule],
  exports: [ScuiNavComponent]
})
export class ScuiNavModule {
}
