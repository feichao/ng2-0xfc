import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CategoryModel } from './_category.interface';

@Injectable()
export class CategoryService {
  constructor(private http: Http) { }

  getCategory(url: string): Promise<CategoryModel[]> {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data.reduce((pre, now) => pre.concat(now), []) as CategoryModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}