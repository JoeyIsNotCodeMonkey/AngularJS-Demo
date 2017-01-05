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
var core_1 = require("@angular/core");
var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        template: "\n        <p>This is an AngularJS demo project, which implements most of the basic features\n        in AngularJS 2.x such as modules, router, service, forms, validations etc.</p>\n        <p>I followed the instructions provided by Mosh Hamedani to finish this project. \n        Thanks to Mosh! His AngularJS tutorial is awesome, which is available on the Udemy.</p>\n        <p>This web app relies on the \"json place holder\", so it is a pure front-end \n        practice. You can fakely add, update, modify and delete users, the corresponding http \n        request can be checked on the browser developer tools (I use chrome).</p>\n        <p>Besides, you can view the posts and their details including comments. Posts are \n        paginated, and are able to be filtered by author.</p>\n    \n    "
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map