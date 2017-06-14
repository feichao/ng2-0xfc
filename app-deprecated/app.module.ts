import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdListModule } from '@angular/material';

import { AppRouterModule } from './app.router.module';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './header/header.component';
import { AppContentComponent } from './content/content.component';
import { AppContentArt } from './content/art/art.component';
import { AppContentStory } from './content/story/story.component';
import { AppContentHole } from './content/hole/hole.component';
import { Post } from './content/_post/_post.component';
import { Category } from './content/_category/_category.component';
import { AppAboutComponent } from './about/about.component';
import { AppFooterComponent } from './footer/footer.component';

import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppContentComponent,
    AppContentArt,
    AppContentStory,
    AppContentHole,
    Post,
    Category,
    AppAboutComponent,
    AppFooterComponent,

    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,

    MdToolbarModule,
    MdButtonModule,

    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }