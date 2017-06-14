import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppContentArt } from './content/art/art.component';
import { AppContentStory } from './content/story/story.component';
import { AppContentHole } from './content/hole/hole.component';
import { Post } from './content/_post/_post.component';
import { AppAboutComponent } from './about/about.component';

const routes: Routes = [{ 
    path: '', 
    redirectTo: '/art', 
    pathMatch: 'full' 
  }, { 
    path: 'art', 
    component: AppContentArt, 
    children: [{
      path: ':id',
      component: Post,
    }]
  }, {
    path: 'story', 
    component: AppContentStory,
    children: [{
      path: ':id',
      component: Post,
    }]
  }, { 
    path: 'hole', 
    component: AppContentHole 
  }, { 
    path: 'about', 
    component: AppAboutComponent 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}