import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { ScUiNavModule } from '../components/scui-nav/scui-nav.module';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    ScUiNavModule
  ]
})
export class ShowcaseModule { }
