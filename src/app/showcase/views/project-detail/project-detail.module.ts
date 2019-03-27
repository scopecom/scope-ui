import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDetailRoutingModule } from './project-detail-routing.module';
import { ProjectDetailComponent } from './project-detail.component';
import { ScUiDrawerModule } from '../../../components/scui-drawer/scui-drawer.module';
import { ScUiArticleModule } from '../../../components/scui-article/scui-article.module';

@NgModule({
  declarations: [ProjectDetailComponent],
  imports: [
    CommonModule,
    ProjectDetailRoutingModule,
    ScUiDrawerModule,
    ScUiArticleModule
  ]
})
export class ProjectDetailModule { }
