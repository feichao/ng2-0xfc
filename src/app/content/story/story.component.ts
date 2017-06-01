import { Component } from '@angular/core';
import Constant from '../../app.constant';

@Component({
  selector: 'content-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})

export class AppContentStory {
  public storyUrl: string = Constant.URL.story;
}
