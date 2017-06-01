import { Component, Injectable } from '@angular/core';
import Constant from '../../app.constant';

@Component({
  selector: 'content-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.css']
})

@Injectable()
export class AppContentArt {
  public categoryUrl: string = Constant.URL.art;
}
