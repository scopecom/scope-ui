import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiDrawerComponent, ScUiDrawerNavComponent } from './scui-drawer.component';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

@NgModule({
  declarations: [ScUiDrawerComponent, ScUiDrawerNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    DragulaModule
  ],
  exports: [ScUiDrawerComponent, ScUiDrawerNavComponent]
})
export class ScUiDrawerModule {
}
