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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
// import {} from ""
var app_route_1 = require("./app.route");
var app_component_1 = require('./app.component');
var admindashboard_component_1 = require("./admindashboard/admindashboard.component");
var userdashboard_component_1 = require("./userdashboard/userdashboard.component");
var signup_component_1 = require("./signup/signup.component");
var adminlogin_component_1 = require("./adminlogin/adminlogin.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(app_route_1.routes)],
            declarations: [app_component_1.AppComponent, admindashboard_component_1.AdminDashBoardComponent, userdashboard_component_1.UserDashBoardComponent, signup_component_1.SignUpComponent, adminlogin_component_1.AdminLoginComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map