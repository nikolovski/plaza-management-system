import { Injectable, OnDestroy} from '@angular/core';
import {PageEvent, Sort} from '@angular/material';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {DatatableSearchTuple} from '../models/datatable-search-tuple.model';

@Injectable()
export class DatatableService implements OnDestroy{

  private pageEventSubject: Subject<PageEvent>;
  private searchTuppleSubject: Subject<DatatableSearchTuple>;
  private sortSubject: Subject<Sort>;
  private swapColumnsSubject: Subject<Array<string>>;
  private rowSelectSubject: Subject<any>;

  constructor() {
    this.pageEventSubject = new Subject();
    this.searchTuppleSubject = new Subject();
    this.sortSubject = new Subject();
    this.swapColumnsSubject = new Subject();
    this.rowSelectSubject = new Subject();
  }

  get page() : Observable<PageEvent> {
    return this.pageEventSubject.asObservable();
  }

  get search(): Observable<DatatableSearchTuple> {
    return this.searchTuppleSubject.asObservable();
  }

  get sort(): Observable<Sort> {
    return this.sortSubject.asObservable();
  }

  get swappedColumns(): Observable<Array<string>> {
    return this.swapColumnsSubject.asObservable();
  }

  get selectedRow(): Observable<any> {
    return this.rowSelectSubject.asObservable();
  }

  setPageEvent(pageEvent: PageEvent): void {
    this.pageEventSubject.next(pageEvent);
  }

  setSearchTupple(searchEvent: DatatableSearchTuple): void {
    this.searchTuppleSubject.next(searchEvent);
  }

  setSort(sort: Sort): void {
    this.sortSubject.next(sort);
  }

  setSwapColumns(columns: Array<string>): void {
    this.swapColumnsSubject.next(columns);
  }

  setRowSelect(row: any): void {
    this.rowSelectSubject.next(row);
  }

  validateThenSearch(searchBy:string, searchKeyword: string) {
    if (searchKeyword && searchKeyword.length > 2) {
      let searchTupple: DatatableSearchTuple = {
        searchBy: searchBy,
        searchKeyword: searchKeyword
      };
      this.setSearchTupple(searchTupple);
    }
  }

  ngOnDestroy(): void {
    this.pageEventSubject.complete();
    this.searchTuppleSubject.complete();
    this.sortSubject.complete();
    this.swapColumnsSubject.complete();
    this.rowSelectSubject.complete();
  }

}
