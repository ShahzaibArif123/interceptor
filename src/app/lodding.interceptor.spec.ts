import { TestBed } from '@angular/core/testing';

import { LoddingInterceptor } from './lodding.interceptor';

describe('LoddingInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoddingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoddingInterceptor = TestBed.inject(LoddingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
