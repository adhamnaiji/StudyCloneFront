import { TestBed } from '@angular/core/testing';

import { SUsersService } from './susers.service';

describe('SUsersService', () => {
  let service: SUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
