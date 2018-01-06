import { TestBed, inject } from '@angular/core/testing';

import { CrudRestService } from './crud-rest.service';

describe('CrudRestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudRestService]
    });
  });

  it('should be created', inject([CrudRestService], (service: CrudRestService) => {
    expect(service).toBeTruthy();
  }));
});
