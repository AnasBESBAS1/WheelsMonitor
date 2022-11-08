import { TestBed } from '@angular/core/testing';

import { WheelRepositoryService } from './wheel-repository.service';

describe('WheelRepositoryService', () => {
  let service: WheelRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheelRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
