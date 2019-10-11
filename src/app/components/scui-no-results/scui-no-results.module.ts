import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiNoResultsComponent } from './scui-no-results.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ScUiNoResultsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ScUiNoResultsComponent]
})
export class ScUiNoResultsModule { }
