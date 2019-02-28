import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ScUiNavModule } from '../../../components/scui-nav/scui-nav.module';
import { ScUiDrawerModule } from '../../../components/scui-drawer/scui-drawer.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    ScUiNavModule,
    ScUiDrawerModule
  ]
})
export class ProjectsModule { }
