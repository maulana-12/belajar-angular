import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ResumeComponent } from './resume/resume.component';

const routesPages: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'demo/resume',
    component: ResumeComponent
  },
  {
    path: 'demo/todos',
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
  },
  {
    path: 'demo/input-output',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routesPages)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
