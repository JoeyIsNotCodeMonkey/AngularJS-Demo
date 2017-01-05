import {Component, OnInit} from '@angular/core'
import {PostsService} from './posts.service';
import {UsersService} from '../users/users.service';
import {PaginationComponent} from '../shared/pagination.component';

@Component({
    template: `
        
        
            <div class="col-md-6">
                <div class="form-group">
                    <label for="sel1">Select list:</label>
                    <select class="form-control" id="sel1" (change)="loadPosts(u.value)" #u>
                        <option value="">Select a user</option>
                        <option *ngFor="let user of users" value="{{user.id}}">{{user.name}}</option>                      
                    </select>
                </div>
                <pagination [items]="posts"  (pageChanged)="onPageChanged($event)"></pagination>
                <ul class="list-group posts">
                    <li *ngFor="let post of pagePosts" 
                    class="list-group-item"
                    [class.active]="currentPost==post"
                    (click)="select(post)"
                    >{{ post.title }}</li>
                </ul>
            </div>  
            <div class="col-md-6" *ngIf="currentPost">
                <div class="panel panel-default">
                    <div class="panel-heading ">
                        <h3 class="panel-title">{{currentPost.title}}</h3>
                    </div>
                    <div class="panel-body">
                        {{currentPost.body}}
                    </div>
                </div>
                <div class="media" *ngFor="let comment of comments">
                    <div class="media-left">              
                        <img class="media-object thumbnail" 
                        src="http://lorempixel.com/80/80/people?random={{comment.id}}/" alt="...">                     
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading">{{comment.name}}</h4>
                        {{comment.body}}
                    </div>
                </div>
            </div>             
        
    `,
    styles: [`
         .posts li { cursor: default; }
         .posts li:hover { background: #ecf0f1; } 
         .list-group-item.active, 
         .list-group-item.active:hover, 
         .list-group-item.active:focus { 
             background-color: #ecf0f1;
             border-color: #ecf0f1; 
             color: #2c3e50;
         }
         .thumbnail {
             border-radius: 100%;
         } 

     `]

})

export class PostsComponent implements OnInit{
    posts = [];
    pagePosts = [];
    users = [];
    comments = [];
    currentPost;
    pageSize = 10;

    constructor(private _postsService: PostsService,
                private _usersService: UsersService) {

    }

    ngOnInit(){
        this._postsService.getPosts()
            .subscribe(posts => {
                this.posts = posts;
                this.pagePosts = this.getPagePosts(1);
            });

        this._usersService.getUsers()
            .subscribe(users => {
                this.users = users;
            }); 
    }

    select(post) {
        this.currentPost = post;
        this._postsService.getComments(post.id)
            .subscribe(comments => {
                this.comments = comments;
            })
    }

    loadPosts(userId) {
        //this.posts = null;
        this._postsService.getPosts(userId)
            .subscribe(posts => {
                this.posts = posts;
                this.pagePosts = this.getPagePosts(1);
            });
    }

    onPageChanged(page) {
        this.pagePosts = this.getPagePosts(page);
    }

    getPagePosts(page) {
        var result = [];
        var start = (page-1) * 10;
        var end = Math.min(start + this.pageSize, this.posts.length);
        for(var i=start; i<end; i++) {
            result.push(this.posts[i]);
        }

        return result;
    }

}