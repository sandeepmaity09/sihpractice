import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
// import {} from ""

import { routes } from "./app.route";

import { AppComponent }  from './app.component';
import { AdminDashBoardComponent } from "./admindashboard/admindashboard.component";
import { UserDashBoardComponent } from "./userdashboard/userdashboard.component";
import { SignUpComponent } from "./signup/signup.component";
import { AdminLoginComponent } from "./adminlogin/adminlogin.component";


@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot(routes)],
  declarations: [ AppComponent,AdminDashBoardComponent,UserDashBoardComponent,SignUpComponent,AdminLoginComponent],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
