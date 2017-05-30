import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import Constant from '../../app.constant';

import { ArtModel } from './art.interface';

@Injectable()
export class ArtService {
  private artCategoryurl: string = Constant.URL.art;

  constructor(private http: Http) { }

  getArtCategory(): Promise<ArtModel[]> {
    return this.http.get(this.artCategoryurl)
      .toPromise()
      .then(response => response.json().data.reduce((pre, now) => pre.concat(now), []) as ArtModel[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}