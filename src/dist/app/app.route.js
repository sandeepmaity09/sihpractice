"use strict";
var admindashboard_component_1 = require("./admindashboard/admindashboard.component");
var userdashboard_component_1 = require("./userdashboard/userdashboard.component");
var signup_component_1 = require("./signup/signup.component");
// import {SignInComponent} from "./signin/signin.component";
var adminlogin_component_1 = require("./adminlogin/adminlogin.component");
exports.routes = [{
        path: 'admin',
        component: admindashboard_component_1.AdminDashBoardComponent
    }, {
        path: 'user',
        component: userdashboard_component_1.UserDashBoardComponent
    }, {
        path: 'signup',
        component: signup_component_1.SignUpComponent
    }, {
        path: 'adminlogin',
        component: adminlogin_component_1.AdminLoginComponent
    }];
//# sourceMappingURL=app.route.js.map