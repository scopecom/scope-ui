import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';
import { MockComponent } from './mock/mock.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailComponent,
    children: [
      {
        path: 'layout',
        component: MockComponent
      },
      {
        path: 'output',
        component: MockComponent
      },
      {
        path: 'publish',
        component: MockComponent
      },
      {
        path: 'overview',
        component: MockComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectDetailRoutingModule {
}
