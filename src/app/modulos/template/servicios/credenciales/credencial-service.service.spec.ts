import { TestBed } from '@angular/core/testing';

import { CredencialService } from './credencial-service.service';

describe('CredencialServiceService', () => {
  let service: CredencialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredencialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
