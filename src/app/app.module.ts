import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdListModule, MdSelectModule, MdProgressSpinnerModule } from '@angular/material';

import { AppRouterModule } from './app.router.module';

import AppComponent from './app.component';
import AboutComponent from './business/about/about.component';

import HeaderComponent from './business/header/header.component'; 
import ContentComponent from './business/content/content.component';
import ContentHeader from './business/content/_header/_header.component';
import ContentIndex from './business/content/index/index.component';
import ContentArt from './business/content/art/art.component';
import ContentStory from './business/content/story/story.component';
import ContentHole from './business/content/hole/hole.component';
import HoleBlock from './business/content/hole/holeblock/holeblock.component';

import { Category } from './business/content/_category/_category.component';
import { Post } from './business/content/_post/_post.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,

    HeaderComponent,
    ContentComponent,
    ContentHeader,
    ContentIndex,
    ContentArt,
    ContentStory,
    ContentHole,
    HoleBlock,
    Category,
    Post
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    MdToolbarModule,
    MdButtonModule,
    MdSelectModule,
    MdProgressSpinnerModule,

    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
