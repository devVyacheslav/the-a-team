import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';

import {MyFirstModuleModule} from "./my-first-module/my-first-module.module";
import { MyFirstComponentComponent } from './my-first-component/my-first-component.component';
import {CoreModule} from "./core/core.module";


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
