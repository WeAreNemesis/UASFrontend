import { TestBed } from '@angular/core/testing';

import { MacAuthGuard } from './mac-auth.guard';

describe('MacAuthGuard', () => {
  let guard: MacAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MacAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
