"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var SignUpComponent = (function () {
    function SignUpComponent(router) {
        this.router = router;
    }
    SignUpComponent.prototype.ngAfterViewInit = function () {
        $(window, document, undefined).ready(function () {
            $('input').blur(function () {
                var $this = $(this);
                if ($this.val())
                    $this.addClass('used');
                else
                    $this.removeClass('used');
            });
            var $ripples = $('.ripples');
            $ripples.on('click.Ripples', function (e) {
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
            $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function (e) {
                $(this).removeClass('is-active');
            });
        });
    };
    SignUpComponent.prototype.goToLogin = function () {
        this.router.navigate(['signin']);
    };
    SignUpComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=signup.component.js.map