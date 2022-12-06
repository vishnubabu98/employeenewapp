import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    ViewEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
