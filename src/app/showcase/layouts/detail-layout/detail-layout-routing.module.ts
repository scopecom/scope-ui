import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailLayoutComponent } from './detail-layout.component';

const routes: Routes = [
  {
    path: '',
    component: DetailLayoutComponent,
    children: [
      {
        path: 'projects',
        loadChildren: '../../views/projects/projects.module#ProjectsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailLayoutRoutingModule { }
