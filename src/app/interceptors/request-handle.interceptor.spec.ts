import { TestBed } from '@angular/core/testing';

import { RequestHandleInterceptor } from './request-handle.interceptor';

describe('RequestHandleInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestHandleInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RequestHandleInterceptor = TestBed.inject(RequestHandleInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
