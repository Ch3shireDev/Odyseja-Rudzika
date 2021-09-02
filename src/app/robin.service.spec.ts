import { TestBed } from '@angular/core/testing';

import { RobinService } from './robin.service';

describe('RobinService', () => {
  let service: RobinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
