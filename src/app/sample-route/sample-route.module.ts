import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './component-a/component-a.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { RouterModule } from '@angular/router';
import { ChildAComponent } from './component-a/child-a/child-a.component';
import { ChildBComponent } from './component-a/child-b/child-b.component';
import { SharedModule } from '../shared/shared.module';
import { SampleRouteRoutingModule } from './sample-route-routing.module';



@NgModule({
  declarations: [
    ComponentAComponent, ComponentBComponent, ChildAComponent, ChildBComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // deteksi routerLink
    SharedModule,
    SampleRouteRoutingModule
  ],
  exports: [
    ComponentAComponent, ComponentBComponent
  ]
})
export class SampleRouteModule { }
