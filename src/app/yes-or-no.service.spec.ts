import { TestBed, inject } from '@angular/core/testing';

import { YesOrNoService } from './yes-or-no.service';

describe('YesOrNoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YesOrNoService]
    });
  });

  it('should be created', inject([YesOrNoService], (service: YesOrNoService) => {
    expect(service).toBeTruthy();
  }));
});
