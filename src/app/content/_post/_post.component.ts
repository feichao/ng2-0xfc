import { Component, Injectable, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

import 'rxjs/add/operator/switchMap';

import { PostService } from './_post.service';
import { PostModel } from './_post.interface';

@Component({
  selector: 'a-post',
  templateUrl: './_post.component.html',
  styleUrls: ['./_post.component.css'],
  providers: [PostService]
})

@Injectable()
export class Post implements OnInit {
  public post: PostModel;
  public saftyBody: SafeHtml;
  public saftyCssLink: SafeResourceUrl[];

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private postService: PostService,
    private sanitized: DomSanitizer,
    private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.postService.getPost(params['id']))
      .subscribe((post: PostModel) => {
        this.post = post;
        this.saftyBody = this.sanitized.bypassSecurityTrustHtml(this.post.body);

        this.saftyCssLink = [];
        for(let jsLink of this.post.js) {
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.src = jsLink;
          this.elementRef.nativeElement.appendChild(s);
        }

        for(let cssLink of this.post.css) {
          this.saftyCssLink.push(this.sanitized.bypassSecurityTrustResourceUrl(cssLink));
        }
      });
  }
}
