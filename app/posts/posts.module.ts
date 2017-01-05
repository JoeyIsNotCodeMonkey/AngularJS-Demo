import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HttpModule }          from '@angular/http';

import { SharedModule }        from '../shared/shared.module';

import { PostsComponent }      from './posts.component';
import { PostsService }         from './posts.service';
import { UsersService }         from '../users/users.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpModule
    ],
    declarations: [
        PostsComponent 
    ],
    exports: [
        PostsComponent 
    ],
    providers: [
        PostsService,
        UsersService
    ]
})
export class PostsModule { 
}