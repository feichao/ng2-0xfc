import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CategoryService } from './_category.service';
import { CategoryModel } from './_category.interface';

@Component({
  selector: 'content-category',
  templateUrl: './_category.component.html',
  styleUrls: ['./_category.component.css'],
  inputs: ['url', 'c-title'],
  providers: [CategoryService]
})

@Injectable()
export class Category implements OnInit {
  public url: string;
  public category: CategoryModel[];

  public trim(str: string): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(str.replace(/\s/g, ''));
  }
  
  constructor(private categoryService: CategoryService, private sanitized: DomSanitizer, private router: Router) {}

  ngOnInit(): void {
    this.categoryService.getCategory(this.url).then(category => {
      this.category = category;
      console.log(this.router);
      if(this.router.url.split('/').length <= 2) {
        this.router.navigateByUrl(this.router.url + '/' + this.category[0].id);
      }
    });
  }

}
