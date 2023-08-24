import { TestBed } from '@angular/core/testing';

import { AplicacionService } from './aplicacion-service.service';

describe('AplicacionServiceService', () => {
  let service: AplicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AplicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
