import { Component, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CategoryService } from './_category.service';
import { CategoryModel } from './_category.interface';

import { Constant } from '../../../app.constant';

@Component({
  selector: 'content-category',
  templateUrl: './_category.component.html',
  styleUrls: ['./_category.component.css'],
  inputs: ['url', 'c-title'],
  providers: [CategoryService]
})

@Injectable()
export class Category implements OnInit {
  url: string;
  category: CategoryModel[];
  categoryYearKeys: string[];
  categoryWithYear: { [year: string]: CategoryModel[] };
  isLoading: boolean;

  isArt: boolean;

  trim(str: string): SafeHtml {
    return this.sanitized.bypassSecurityTrustHtml(str.replace(/\s/g, ''));
  }
  
  constructor(private categoryService: CategoryService, private sanitized: DomSanitizer, private router: Router) {
    this.isArt = this.url === Constant.URL.art;
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.categoryWithYear = {};
    this.categoryService.getCategory(this.url).then(category => {
      this.isLoading = false;
      this.category = category;
      if(Array.isArray(this.category)) {
        this.category.forEach(ca => {
          const year = ca.year;
          if(Array.isArray(this.categoryWithYear[year])) {
            this.categoryWithYear[year].push(ca);
          } else {
            this.categoryWithYear[year] = [ca];
          }
        });
      }
      this.categoryYearKeys = Object.keys(this.categoryWithYear).sort((a, b) => {
        if(+a > +b) {
          return -1;
        }
        return 1;
      });
    });
  }

}
