import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import ContentArt from './business/content/art/art.component';

const routes: Routes = [{ 
    path: '', 
    redirectTo: '/art', 
    pathMatch: 'full' 
  }, { 
    path: 'art', 
    component: ContentArt, 
    // children: [{
    //   path: ':id',
    //   component: Post,
    // }]
  // }, {
  //   path: 'story', 
  //   component: AppContentStory,
  //   children: [{
  //     path: ':id',
  //     component: Post,
  //   }]
  // }, { 
  //   path: 'hole', 
  //   component: AppContentHole 
  // }, { 
  //   path: 'about', 
  //   component: AppAboutComponent 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}