import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { ChildComponent } from './child/child.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

const inputOutputDecorator = [ChildComponent, MainComponent]

@NgModule({
  declarations: [...inputOutputDecorator],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ],
  exports: [...inputOutputDecorator]
})
export class DemoModule { }
