import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material";

@NgModule({
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [
    MatCardModule
  ],
  declarations: []
})
export class MatModule { }
