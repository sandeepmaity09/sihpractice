import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef , AfterViewInit, ViewChild } from '@angular/core';
import { MaterializeDirective } from 'angular2-materialize';

declare var $:any;

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css'],
})

export class AppComponent implements AfterViewInit {

  // @ViewChild('modal1') el:ElementRef;

  ngAfterViewInit(){
    // $(this.el.nativeElement).find('modal1').trigger('click');
  }

  callModel(){
    $(document).ready(function(){
    $('#modal1').model('show');
  });
  }

  constructor(private router:Router){}

  phone_no:String;
  otp:Number;   
  isEmployee:Boolean;

  // isEmployee = login(phone_no,otp);  // call the login at backend and get the status user or moderator

  // goTo(){
  // if(isEmployee == true)
  //   this.router.navigate(['user']);
  // else
  //   this.router.navigate(['moderator'])
  // }

  goTo(){
    this.router.navigate(['admin']);
  }

}
