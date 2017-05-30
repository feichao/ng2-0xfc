import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppContentArt } from './content/art/art.component';
import { AppContentStory } from './content/story/story.component';
import { AppContentHole } from './content/hole/hole.component';

const routes: Routes = [
  { path: '', redirectTo: '/art', pathMatch: 'full' },
  { path: 'art', component: AppContentArt },
  { path: 'story', component: AppContentStory },
  { path: 'hole', component: AppContentHole }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}