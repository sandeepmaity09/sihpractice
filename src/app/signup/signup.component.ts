import {Component,AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  moduleId:module.id,
  selector:'signup',
  templateUrl:'./signup.component.html',
  styleUrls:['./signup.component.css']
})

export class SignUpComponent implements AfterViewInit{

    ngAfterViewInit(){

         $(window, document, undefined).ready(function() {
  $('input').blur(function() {
    var $this = $(this);
    if ($this.val())
      $this.addClass('used');
    else
      $this.removeClass('used');
  });

  var $ripples = $('.ripples');

  $ripples.on('click.Ripples', function(e:any) {

    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');

    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;

    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });

    $this.addClass('is-active');

  });

  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function(e:any) {
  	$(this).removeClass('is-active');
  });

 });
}

    constructor(private router:Router){}

    goToLogin(){
        this.router.navigate(['signin'])
    }

}

