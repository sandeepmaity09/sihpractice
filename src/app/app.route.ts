import { Routes } from '@angular/router';
import {AdminDashBoardComponent} from "./admindashboard/admindashboard.component";
import {UserDashBoardComponent} from "./userdashboard/userdashboard.component";
import {SignUpComponent} from "./signup/signup.component";
// import {SignInComponent} from "./signin/signin.component";
import {AdminLoginComponent} from "./adminlogin/adminlogin.component";

export const routes:Routes = [{
  path:'admin',
  component:AdminDashBoardComponent
},{
  path:'user',
  component:UserDashBoardComponent
},{
  path:'signup',
  component:SignUpComponent
},{
  path:'adminlogin',
  component:AdminLoginComponent
}];
