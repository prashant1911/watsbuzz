import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class GlobalService {

  constructor(private http: HttpClient) {
    }

  getNews() {
    const params = new HttpParams().set('apiKey', 'ca2eef6418b240fb9793da7fbd7e4030');
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=the-times-of-india', {params: params} );
  }


}
