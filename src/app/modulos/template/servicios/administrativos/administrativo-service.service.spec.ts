import { TestBed } from '@angular/core/testing';

import { AdministrativoService } from './administrativo-service.service';

describe('AdministrativoServiceService', () => {
  let service: AdministrativoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrativoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
