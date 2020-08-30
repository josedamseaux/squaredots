import { TestBed } from '@angular/core/testing';

import { PixelserviceService } from './pixelservice.service';

describe('PixelserviceService', () => {
  let service: PixelserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixelserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
