import { TestBed } from '@angular/core/testing';

import { HistoricoMoedasService } from './historico-moedas.service';

describe('HistoricoMoedasService', () => {
  let service: HistoricoMoedasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoricoMoedasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
