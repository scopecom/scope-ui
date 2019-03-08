import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { ScUiNavModule } from '../../../components/scui-nav/scui-nav.module';
import { ScUiDrawerModule } from '../../../components/scui-drawer/scui-drawer.module';
import { ScuiCardModule } from '../../../components/scui-card/scui-card.module';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    ScUiNavModule,
    ScUiDrawerModule,
    ScuiCardModule
  ]
})
export class StartModule {
}
