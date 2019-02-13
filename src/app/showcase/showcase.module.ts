import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowcaseRoutingModule } from './showcase-routing.module';
import { ShowcaseComponent } from './showcase.component';
import { ScuiNavModule } from '../components/scui-nav/scui-nav.module';

@NgModule({
  declarations: [ShowcaseComponent],
  imports: [
    CommonModule,
    ShowcaseRoutingModule,
    ScuiNavModule
  ]
})
export class ShowcaseModule { }
