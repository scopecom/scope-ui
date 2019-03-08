import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScuiCardComponent } from './scui-card.component';

@NgModule({
  declarations: [ScuiCardComponent],
  exports:[ScuiCardComponent],
  imports: [
    CommonModule
  ]
})
export class ScuiCardModule { }
