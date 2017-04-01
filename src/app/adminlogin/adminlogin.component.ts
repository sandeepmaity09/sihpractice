import {Component} from '@angular/core'
import {Router} from '@angular/router'

@Component({
  moduleId:module.id,
  selector:'user',
  templateUrl:'./adminlogin.component.html',
  styleUrls:['./adminlogin.component.css']
})

export class AdminLoginComponent {

    constructor(private router:Router){};

    admin_id:String;
    admin_password:String;

}