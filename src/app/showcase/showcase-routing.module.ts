import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowcaseComponent } from './showcase.component';

const routes: Routes = [
  {
    path: '',
    component: ShowcaseComponent,
    children: [{
      path: '',
      loadChildren: './views/start/start.module#StartModule',
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule {
}
