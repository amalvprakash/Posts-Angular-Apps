import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ViewPostsComponent } from './view-posts/view-posts.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';

const myRoute:Routes=[
  {
    path:"",
    component:AddPostsComponent
  },
  {
    path:"view",
    component:ViewPostsComponent
  },
  {
    path:"navbar",
    component:NavbarComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    AddPostsComponent,
    ViewPostsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
