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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var users_service_1 = require("./users.service");
var user_1 = require("./user");
var NewUserComponent = (function () {
    function NewUserComponent(fb, _router, _route, _usersService) {
        this._router = _router;
        this._route = _route;
        this._usersService = _usersService;
        this.user = new user_1.User();
        this.form = fb.group({
            name: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            phone: [],
            address: fb.group({
                street: [],
                suite: [],
                city: [],
                zipcode: []
            })
        });
    }
    NewUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.params.subscribe(function (params) {
            var id = +params["id"];
            _this.title = id ? "Edit User" : "New User";
            if (!id)
                return;
            _this._usersService.getUser(id)
                .subscribe(function (user) { return _this.user = user; }, function (response) {
                if (response.status == 404) {
                    _this._router.navigate(['not-found']);
                }
            });
        });
    };
    NewUserComponent.prototype.save = function () {
        var _this = this;
        if (this.user.id) {
            this._usersService.updateUser(this.user)
                .subscribe(function (x) {
                _this._router.navigate(['users']);
            });
        }
        else {
            this._usersService.createUser(this.user)
                .subscribe(function (x) {
                _this._router.navigate(['users']);
            });
        }
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/users/newUser.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        router_1.ActivatedRoute,
        users_service_1.UsersService])
], NewUserComponent);
exports.NewUserComponent = NewUserComponent;
//# sourceMappingURL=newUser.component.js.map