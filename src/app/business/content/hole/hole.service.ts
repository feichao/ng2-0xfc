import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Constant } from '../../../app.constant';
import { HoleModel, HoleHttpModel } from './hole.interface';

@Injectable()
export class HoleService {
  constructor(private http: Http) { }

  getHoles(index: number): Promise<HoleHttpModel> {
    return this.http.get(`${ Constant.URL.hole }?index=${ index }`)
      .toPromise()
      .then(response => {
        let data = response.json().data;
        data.holes = data.holes as HoleModel[];
        return data;
      })
      .catch(this.handleError);
  }

  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}