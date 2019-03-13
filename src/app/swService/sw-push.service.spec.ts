import { TestBed } from '@angular/core/testing';

import { SwPushService } from './sw-push.service';

describe('SwPushService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwPushService = TestBed.get(SwPushService);
    expect(service).toBeTruthy();
  });
});
