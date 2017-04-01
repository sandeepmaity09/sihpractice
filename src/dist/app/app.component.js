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
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    // @ViewChild('modal1') el:ElementRef;
    AppComponent.prototype.ngAfterViewInit = function () {
        // $(this.el.nativeElement).find('modal1').trigger('click');
    };
    AppComponent.prototype.callModel = function () {
        $(document).ready(function () {
            $('#modal1').model('show');
        });
    };
    // isEmployee = login(phone_no,otp);  // call the login at backend and get the status user or moderator
    // goTo(){
    // if(isEmployee == true)
    //   this.router.navigate(['user']);
    // else
    //   this.router.navigate(['moderator'])
    // }
    AppComponent.prototype.goTo = function () {
        this.router.navigate(['admin']);
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map