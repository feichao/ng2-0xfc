import { Component } from '@angular/core';

@Component({
  selector: 'content-header',
  templateUrl: './_header.component.html',
  styleUrls: ['./_header.component.css'],
  inputs: ['cTitle']
})

export default class ContentHeader {
  public cTitle: string;
}
