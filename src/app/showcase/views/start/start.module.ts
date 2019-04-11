import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { ScUiNavModule } from '../../../components/scui-nav/scui-nav.module';
import { ScUiDrawerModule } from '../../../components/scui-drawer/scui-drawer.module';
import { ScUiCardModule } from '../../../components/scui-card/scui-card.module';
import { ScUiTabsModule } from '../../../components/scui-tabs/scui-tabs.module';
import { ScUiPillsModule } from '../../../components/scui-pills/scui-pills.module';
import { ScuiDropdownModule } from '../../../components/scui-dropdown/scui-dropdown.module';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    ScUiNavModule,
    ScUiDrawerModule,
    ScUiCardModule,
    ScUiTabsModule,
    ScUiPillsModule,
    ScuiDropdownModule
  ]
})
export class StartModule {
}
