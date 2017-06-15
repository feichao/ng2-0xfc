import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ContentIndex from './business/content/index/index.component';
import ContentArt from './business/content/art/art.component';
import ContentStory from './business/content/story/story.component';
import ContentHole from './business/content/hole/hole.component';

import AboutComponent from './business/about/about.component';

const routes: Routes = [{ 
    path: '', 
    component: ContentIndex
  }, { 
    path: 'art', 
    component: ContentArt, 
    // children: [{
    //   path: ':id',
    //   component: Post,
    // }]
  }, {
    path: 'story', 
    component: ContentStory,
    // children: [{
    //   path: ':id',
    //   component: Post,
    // }]
  }, { 
    path: 'hole', 
    component: ContentHole 
  }, { 
    path: 'about', 
    component: AboutComponent 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}