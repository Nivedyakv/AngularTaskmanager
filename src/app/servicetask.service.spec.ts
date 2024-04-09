import { TestBed } from '@angular/core/testing';

import { ServicetaskService } from './servicetask.service';

describe('ServicetaskService', () => {
  let service: ServicetaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicetaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
