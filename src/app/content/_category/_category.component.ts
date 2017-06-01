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

  public category: CategoryModel[];
  
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.categoryService.getCategory(this.url).then(category => this.category = category);
  }

}
