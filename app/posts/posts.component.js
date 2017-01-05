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
var posts_service_1 = require("./posts.service");
var users_service_1 = require("../users/users.service");
var PostsComponent = (function () {
    function PostsComponent(_postsService, _usersService) {
        this._postsService = _postsService;
        this._usersService = _usersService;
        this.posts = [];
        this.pagePosts = [];
        this.users = [];
        this.comments = [];
        this.pageSize = 10;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postsService.getPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
            _this.pagePosts = _this.getPagePosts(1);
        });
        this._usersService.getUsers()
            .subscribe(function (users) {
            _this.users = users;
        });
    };
    PostsComponent.prototype.select = function (post) {
        var _this = this;
        this.currentPost = post;
        this._postsService.getComments(post.id)
            .subscribe(function (comments) {
            _this.comments = comments;
        });
    };
    PostsComponent.prototype.loadPosts = function (userId) {
        var _this = this;
        //this.posts = null;
        this._postsService.getPosts(userId)
            .subscribe(function (posts) {
            _this.posts = posts;
            _this.pagePosts = _this.getPagePosts(1);
        });
    };
    PostsComponent.prototype.onPageChanged = function (page) {
        this.pagePosts = this.getPagePosts(page);
    };
    PostsComponent.prototype.getPagePosts = function (page) {
        var result = [];
        var start = (page - 1) * 10;
        var end = Math.min(start + this.pageSize, this.posts.length);
        for (var i = start; i < end; i++) {
            result.push(this.posts[i]);
        }
        return result;
    };
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        template: "\n        \n        \n            <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                    <label for=\"sel1\">Select list:</label>\n                    <select class=\"form-control\" id=\"sel1\" (change)=\"loadPosts(u.value)\" #u>\n                        <option value=\"\">Select a user</option>\n                        <option *ngFor=\"let user of users\" value=\"{{user.id}}\">{{user.name}}</option>                      \n                    </select>\n                </div>\n                <pagination [items]=\"posts\"  (pageChanged)=\"onPageChanged($event)\"></pagination>\n                <ul class=\"list-group posts\">\n                    <li *ngFor=\"let post of pagePosts\" \n                    class=\"list-group-item\"\n                    [class.active]=\"currentPost==post\"\n                    (click)=\"select(post)\"\n                    >{{ post.title }}</li>\n                </ul>\n            </div>  \n            <div class=\"col-md-6\" *ngIf=\"currentPost\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading \">\n                        <h3 class=\"panel-title\">{{currentPost.title}}</h3>\n                    </div>\n                    <div class=\"panel-body\">\n                        {{currentPost.body}}\n                    </div>\n                </div>\n                <div class=\"media\" *ngFor=\"let comment of comments\">\n                    <div class=\"media-left\">              \n                        <img class=\"media-object thumbnail\" \n                        src=\"http://lorempixel.com/80/80/people?random={{comment.id}}/\" alt=\"...\">                     \n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"media-heading\">{{comment.name}}</h4>\n                        {{comment.body}}\n                    </div>\n                </div>\n            </div>             \n        \n    ",
        styles: ["\n         .posts li { cursor: default; }\n         .posts li:hover { background: #ecf0f1; } \n         .list-group-item.active, \n         .list-group-item.active:hover, \n         .list-group-item.active:focus { \n             background-color: #ecf0f1;\n             border-color: #ecf0f1; \n             color: #2c3e50;\n         }\n         .thumbnail {\n             border-radius: 100%;\n         } \n\n     "]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService,
        users_service_1.UsersService])
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map