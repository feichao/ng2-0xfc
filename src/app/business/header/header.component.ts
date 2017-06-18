import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  outputs: ['onSelectChange']
})

export default class HeaderComponent {
  public selectedRouter: string;

  constructor(private router: Router) {
    router.events.subscribe((urlObj: any) => this.selectedRouter = urlObj.url);
  }

  onSelectChange() {
    this.router.navigateByUrl(this.selectedRouter);
  }
}
