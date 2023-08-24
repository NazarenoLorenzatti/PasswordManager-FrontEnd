import { TestBed } from '@angular/core/testing';

import { CredencialServiceService } from './credencial-service.service';

describe('CredencialServiceService', () => {
  let service: CredencialServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredencialServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
