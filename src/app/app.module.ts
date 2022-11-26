import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostsComponent } from './add-posts/add-posts.component';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';

const myRoute:Routes=[
  {
    path:"",
    component:AddPostsComponent
  }
  ]
@NgModule({
  declarations: [
    AppComponent,
    AddPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
