import { TestBed } from '@angular/core/testing';

import { HeroiResolverService } from './heroi-resolver.service';

describe('HeroiResolverService', () => {
  let service: HeroiResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroiResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
