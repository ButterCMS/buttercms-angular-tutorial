import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Paging} from '../_models';
import {of} from 'rxjs/observable/of';

@Injectable()
export class ButterCMSService {
  private static baseURL = 'https://api.buttercms.com/';
  private api_token = '321478403e868f0fc41f0115731f330ff720ce0b';
  // private api_token = 'your_api_token';
  private okToCallApi = false;

  constructor(private http: HttpClient) {
    this.okToCallApi = !(!this.api_token || this.api_token === 'your_api_token');
  }

  customers(): Observable<Paging> {
    if (!this.okToCallApi) {
      return of(null);
    }
    return this.http.get<Paging>(ButterCMSService.baseURL + 'v2/pages/customer_case_study/',
      {params: this.getListingParams()})
      .pipe(
        map(response => {
          return {
            meta: response.meta,
            data: response.data
          };
        }));
  }

  customer(slug: string): Observable<{ data: any }> {
    if (!this.okToCallApi) {
      return of(null);
    }
    if (!slug) {
      slug = '';
    }
    return this.http.get<{ data }>(ButterCMSService.baseURL + `v2/pages/customer_case_study/${slug}`,
      {params: this.getBaseParams()})
      .pipe(
        map(response => {
          return response;
        }));
  }

  faq(): Observable<{ data: any }> {
    if (!this.okToCallApi) {
      return of(null);
    }
    return this.http.get<{ data }>(ButterCMSService.baseURL + `v2/content`,
      {params: this.getFaqParams()})
      .pipe(
        map(response => {
          return response;
        }));
  }

  blogPosts(): Observable<Paging> {
    if (!this.okToCallApi) {
      return of(null);
    }
    return this.http.get<Paging>(ButterCMSService.baseURL + 'v2/posts/',
      {params: this.getListingParams()})
      .pipe(
        map(response => {
          return {
            meta: response.meta,
            data: response.data
          };
        }));
  }

  blogPost(slug: string): Observable<{ data: any, meta: any }> {
    if (!this.okToCallApi) {
      return of(null);
    }
    if (!slug) {
      slug = '';
    }
    return this.http.get<{ data, meta }>(ButterCMSService.baseURL + `v2/posts/${slug}`,
      {params: this.getBaseParams()})
      .pipe(
        map(response => {
          return response;
        }));
  }

  feeds(type: 'rss'| 'atom'| 'sitemap'): Observable<{ data: any }> {
    if (!this.okToCallApi) {
      return of(null);
    }
    let feedType = type;
    if (!type) {
      feedType = 'rss';
    }
    return this.http.get<{ data, meta }>(ButterCMSService.baseURL + `v2/feeds/${feedType}`,
      {params: this.getBaseParams()})
      .pipe(
        map(response => {
          return response;
        }));
  }

  private getFaqParams() {
    return {
      'keys': 'faq_headline,faq_items',
      ...this.getBaseParams()
    };
  }

  private getListingParams() {
    return {
      'page': '1',
      'page_size': '10',
      ... this.getBaseParams()
    };
  }

  private getBaseParams() {
    return {
      'auth_token': this.api_token
    };
  }
}
