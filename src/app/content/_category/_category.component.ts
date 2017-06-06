import { Component, Injectable, OnInit, Input } from '@angular/core';
import { CategoryService } from './_category.service';
import { CategoryModel } from './_category.interface';

@Component({
  selector: 'content-category',
  templateUrl: './_category.component.html',
  styleUrls: ['./_category.component.css'],
  providers: [CategoryService]
})

@Injectable()
export class Category implements OnInit {
  @Input()
  public url: string;

  @Input()
  public cTitle: string;

  public category: CategoryModel[];

  public trim(str: string): string {
    return str.replace(/\s/g, '');
  }
  
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategory(this.url).then(category => this.category = category);
  }

}
