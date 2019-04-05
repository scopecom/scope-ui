import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiNavModule } from '../../../components/scui-nav/scui-nav.module';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ScUiDrawerModule } from '../../../components/scui-drawer/scui-drawer.module';
import { ScUiArticleModule } from '../../../components/scui-article/scui-article.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ScUiNavModule,
    ProjectsRoutingModule,
    ScUiDrawerModule,
    ScUiArticleModule
  ]
})
export class ProjectsModule { }
