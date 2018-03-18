import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {map} from 'rxjs/operators';
import {Paging} from '../_models';

@Injectable()
export class ButterCMSService {
  private static baseURL = 'https://api.buttercms.com/';
  private api_token = '321478403e868f0fc41f0115731f330ff720ce0b';


  constructor(private http: HttpClient) {
  }

  customers(): Observable<{ meta: any, data: any[] }> {
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
    return this.http.get<{ data }>(ButterCMSService.baseURL + `v2/content`,
      {params: this.getFaqParams()})
      .pipe(
        map(response => {
          return response;
        }));
  }

  blogPosts(): Observable<Paging> {
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

  blogPost(slug: string): Observable<{ data: any }> {
    if (!slug) {
      slug = '';
    }
    return this.http.get<{ data }>(ButterCMSService.baseURL + `v2/posts/${slug}`,
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
