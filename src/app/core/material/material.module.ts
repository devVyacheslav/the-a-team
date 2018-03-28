import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule } from '@angular/material';

const materialModules =[
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule
]

@NgModule({
  imports: [
    materialModules
  ],
  exports: [
    materialModules
  ]
})
export class MaterialModule { }
