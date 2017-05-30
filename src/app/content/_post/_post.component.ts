import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  private post: PostModel;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private postService: PostService) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.postService.getPost(params['id']))
      .subscribe((post: PostModel) => this.post = post);
  }

}
