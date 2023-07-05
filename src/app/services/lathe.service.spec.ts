import { TestBed } from '@angular/core/testing';

import { LatheService } from './lathe.service';

describe('LatheService', () => {
  let service: LatheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
