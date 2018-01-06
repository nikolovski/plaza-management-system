import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/retry';

@Injectable()
export class CrudRestService implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {

  }

  getKeys(collectionUrl: string): Observable<any> {
    let params = new HttpParams();
    params = params
      .set('shallow', 'true');
    return this.http.get(collectionUrl, {params: params})
      .map(shallowResponse => Object.keys(shallowResponse)).retry(10);
  }


  getLatestDocuments<T>(collectionUrl: string, limitToLast: string, endAt: string, orderBy?: string): Observable<Array<T>> {
    let params = new HttpParams();
    params = params
      .append('orderBy', JSON.stringify(orderBy) || JSON.stringify('$key'))
      .append('limitToLast', limitToLast)
      .append('endAt', JSON.stringify(endAt));
    return this.http.get<Array<T>>(collectionUrl, {params: params}).retry(10);
  }

  getDocumentsWithinRange<T>(collectionUrl: string, startAt: string, endAt: string, orderBy?: string): Observable<T> {
    let params = new HttpParams();
    params = params
      .append('orderBy', JSON.stringify(orderBy) || JSON.stringify('$key'))
      .append('startAt', JSON.stringify(startAt))
      .append('endAt', JSON.stringify(endAt));
    return this.http.get<T>(collectionUrl, {params: params}).retry(10);

  }

  searchDocumentsByField<T>(collectionUrl: string, field: string, search: string): Observable<Array<T>> {
    let params = new HttpParams();
    params = params
      .append('orderBy', JSON.stringify(field))
      .append('startAt', JSON.stringify(search))
      .append('endAt', JSON.stringify(search + '\uf8ff'));
    return this.http.get<Array<T>>(collectionUrl, {params: params}).retry(10);
  }

  putDocument<T>(collectionUrl: string, document: T): Observable<T> {
    let params = new HttpParams();
    return this.http.put<T>(collectionUrl,document);
  }

  putDocuments<T>(collectionUrl: string, documents: Array<T>): Observable<T> {
    let params = new HttpParams();
    return this.http.put<T>(collectionUrl,document).retry(10);
  }

  postDocument<T>(collectionUrl: string, document: T): Observable<T> {
    let params = new HttpParams();
    return this.http.post<T>(collectionUrl,document).retry(10);
  }

}
