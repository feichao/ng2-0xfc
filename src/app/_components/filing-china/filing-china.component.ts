import { Inject, Component } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'filing-china',
  templateUrl: './filing-china.component.html',
  styleUrls: ['./filing-china.component.css']
})
export class FilingChinaComponent {
  filing: String;
  constructor(@Inject(DOCUMENT) private document) {
    let host = document.location.hostname;
    if (/22bytes/.test(host)) {
      this.filing = '粤ICP备17094336号-3';
    } else {
      this.filing = '粤ICP备17094336号-1';
    }
  }
}