import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { ScUiNavModule } from '../../../components/scui-nav/scui-nav.module';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    ScUiNavModule
  ]
})
export class StartModule {
}
