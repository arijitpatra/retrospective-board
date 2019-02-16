import { TestBed, inject } from '@angular/core/testing';

import { BoardsDataServiceService } from './boards-data-service.service';

describe('BoardsDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BoardsDataServiceService]
    });
  });

  it('should be created', inject([BoardsDataServiceService], (service: BoardsDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
