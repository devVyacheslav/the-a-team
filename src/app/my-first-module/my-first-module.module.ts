import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFirstModuleRoutingModule } from './my-first-module-routing.module';
import { MyCompComponent } from './my-comp/my-comp.component';

@NgModule({
  imports: [
    CommonModule,
    MyFirstModuleRoutingModule
  ],
  declarations: [MyCompComponent]
})
export class MyFirstModuleModule { }
