import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {MyFirstModuleModule} from "./my-first-module/my-first-module.module";
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import {CoreModule} from "./core/core.module";


@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyFirstModuleModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
