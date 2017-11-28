import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Constant } from '../../../app.constant';

import { PostModel } from './_post.interface';

@Injectable()
export class PostService {
  postUrl: string = Constant.URL.post;

  constructor(private http: Http) { }

  getPost(id): Promise<PostModel> {
    return this.http.get(this.postUrl + id)
      .toPromise()
      .then(response => response.json().data as PostModel)
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}