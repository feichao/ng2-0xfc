import { Component } from '@angular/core';
import Constant from '../../../app.constant';

@Component({
  selector: 'content-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})
export default class ContentArt {
  public categoryUrl: string = Constant.URL.art;
}
