import {Component, EventEmitter, Injectable, Input, OnInit, Output} from '@angular/core';
import {Currency} from '../enums/currency.enum';
import Logger from '../../../core/logger';
import {MatSelect, MatSelectChange, PageEvent, Sort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {DatatableService} from './datatable.service';
import Utils from '../../../core/utils';
import {DatatableSearchTuple} from '../models/datatable-search-tuple.model';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
@Injectable()
export class DatatableComponent implements OnInit {

  @Input() fields: Array<string>;
  @Input() displayedFields: Array<string>;

  @Input() data: Array<any>;

  @Input() pageSize = 10;
  @Input() pageSizeOptions = [5, 10, 25, 100];

  @Input() totalLength = 100;

  @Input() currencyName: string = Currency.DOLLAR;

  pageEvent: Subject<PageEvent>;
  searchBy: string;
  searchKeyword: string;

  constructor(private datatableService: DatatableService) {
  }

  ngOnInit() {
    this.pageEvent = new Subject();
    this.searchBy = this.fields[0];
  }

  onDragStart(event: DragEvent) {
    const sourceColumnIndex = this.displayedFields
      .indexOf(event.srcElement.textContent).toString();
    Logger.log('Source',sourceColumnIndex);
    event.dataTransfer.setData('text/plain', sourceColumnIndex);
  }

  onDragOver(event) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    const sourceColumnIndex = event.dataTransfer.getData('text/plain');
    const targetColumnIndex = this.displayedFields.indexOf(event.srcElement.textContent);
    Logger.log('Target',targetColumnIndex);
    this.fields = Utils.swap(this.fields,+sourceColumnIndex,targetColumnIndex);
    this.displayedFields = Utils.swap(this.displayedFields,+sourceColumnIndex,targetColumnIndex);
    this.datatableService.setSwapColumns(this.fields);

  }

  onPageChange(event: PageEvent) {
    this.datatableService.setPageEvent(event);
  }

  onFieldSelect(event: MatSelectChange) {
    Logger.log('Search by:',event.value);
    this.searchBy = event.value;
    this.datatableService.validateThenSearch(this.searchBy,this.searchKeyword);
  }

  onSearchInput(): void {
    Logger.log('Search input:',this.searchKeyword);
    this.datatableService.validateThenSearch(this.searchBy,this.searchKeyword);
  }

  onSort(sort: Sort):void {
    Logger.log('Sorting', sort);
    this.data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      return Utils.compareStrings(a[sort.active], b[sort.active], isAsc);
    });
    this.datatableService.setSort(sort);
  }

  onRowClick(row: any): void {
    this.datatableService.setRowSelect(row);
  }
}
