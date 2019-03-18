import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailLayoutRoutingModule } from './detail-layout-routing.module';
import { DetailLayoutComponent } from './detail-layout.component';

@NgModule({
  declarations: [DetailLayoutComponent],
  imports: [
    CommonModule,
    DetailLayoutRoutingModule
  ]
})
export class DetailLayoutModule { }
