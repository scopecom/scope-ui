import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailLayoutComponent } from './detail-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DetailLayoutComponent,
    children: [
      {
        path: 'project/:projectId',
        loadChildren: '../../views/project-detail/project-detail.module#ProjectDetailModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailLayoutRoutingModule { }
