import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [
      {
        path: 'start',
        loadChildren: './views/start/start.module#StartModule',
      },
      {
        path: 'projects',
        loadChildren: './views/projects/projects.module#ProjectsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule {
}
