import { Component } from '@angular/core';
import { Constant } from '../../../app.constant';

@Component({
  selector: 'content-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export class ContentArt {
  categoryUrl: string = Constant.URL.art;
}
