import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { HomeComponent }     from './home.component';
import { NavbarComponent} from './navbar.component';


import {SharedModule} from './shared/shared.module';
import { UsersModule }       from './users/users.module';
import { PostsModule }       from './posts/posts.module';

import { usersRouting }      from './users/users.routing';
import { postsRouting }      from './posts/posts.routing';
import { routing }           from './app.routing';



@NgModule({
  imports:      [ 
      BrowserModule,
      SharedModule,
      UsersModule,
      PostsModule,
      usersRouting,
      postsRouting,
      routing 
    ],

  declarations: [ 
    AppComponent,
    NavbarComponent,
    HomeComponent
  
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
