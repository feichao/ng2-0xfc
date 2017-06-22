import { Component, Injectable, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

import 'rxjs/add/operator/switchMap';

import { PostService } from './_post.service';
import { PostModel } from './_post.interface';

function getWindow() : any {
   // return the global native browser window object
   return window;
}

@Component({
  selector: 'a-post',
  templateUrl: './_post.component.html',
  styleUrls: ['./_post.component.css'],
  providers: [PostService]
})

@Injectable()
export class Post implements OnInit, OnDestroy {
  public post: PostModel;
  public saftyBody: SafeHtml;
  public saftyCssLink: SafeResourceUrl[];
  public _window: any = getWindow();

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private location: Location,
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
        
        document.body.style.overflow = 'hidden';
        // 强制加载网易云跟帖插件
        let tie = document.getElementById('cloud-tie-wrapper');
        if(tie) {
          tie.innerHTML = '';
        }
        this._window.cloudTieConfig = {
          url: document.location.href,
          sourceId: '',
          productKey: 'b6fef8a47c1445d8acfddbd8dc465ff3',
          target: 'cloud-tie-wrapper'
        };

        this.post.js.push('https://img1.cache.netease.com/f2e/tie/yun/sdk/loader.js');
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

  ngOnDestroy():void {
    document.body.style.overflow = '';
  }

  goBack() {
    this.location.back();
  }
}
