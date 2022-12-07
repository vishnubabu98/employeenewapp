import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddempComponent } from './addemp/addemp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';


const myRoute:Routes=[
  {
    path:"",
    component:AddempComponent
  },
  {
  path:"viewemp",
  component:ViewEmpComponent

  },
  {
    path:"searchemp",
    component:SearchComponent
  
    }
]

@NgModule({
  declarations: [
    AppComponent,
    AddempComponent,
    ViewEmpComponent,
    NavbarComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
