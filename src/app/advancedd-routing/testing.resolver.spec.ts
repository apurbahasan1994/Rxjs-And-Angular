import { TestBed } from '@angular/core/testing';

import { TestingResolver } from './testing.resolver';

describe('TestingResolver', () => {
  let resolver: TestingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TestingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
