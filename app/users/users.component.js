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
var users_service_1 = require("./users.service");
var UsersComponent = (function () {
    function UsersComponent(_usersService) {
        this._usersService = _usersService;
        this.isLoading = true;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._usersService.getUsers()
            .subscribe(function (users) {
            _this.isLoading = false;
            _this.users = users;
        }, null, function () { _this.isLoading = false; });
    };
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        if (confirm("Are you sure you want to delete " + user.name + "?")) {
            var index = this.users.indexOf(user);
            this.users.splice(index, 1);
            this._usersService.deleteUser(user.id)
                .subscribe(null, function (err) {
                alert("Cound not delete the user");
                _this.users.splice(index, 0, user);
            });
        }
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        template: "<h3>Users</h3>\n                <div *ngIf=\"isLoading\">Getting data...</div>     \n                <p><a routerLink=\"/users/new\" class=\"btn btn-primary\" role=\"button\">New User</a></p>          \n                <table class=\"table table-bordered\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Email</th>\n                            <th>Edit</th>\n                            <th>Delete</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let user of users\">\n                            <td>{{user.name}}</td>\n                            <td>{{user.email}}</td>\n                            <td>\n                                <a [routerLink]=\"['/users', user.id]\">\n                                    <i class=\"glyphicon glyphicon-edit\"></i>\n                                </a>\n                            </td>\n                            <td><i (click)=\"deleteUser(user)\" class=\"glyphicon glyphicon-remove clickable\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>\n                "
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map