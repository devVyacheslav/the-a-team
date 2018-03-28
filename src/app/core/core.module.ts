import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatModule} from "./mat/mat.module";

@NgModule({
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [
    MatModule
  ]
})
export class CoreModule { }
