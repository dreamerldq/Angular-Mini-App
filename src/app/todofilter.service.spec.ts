import { TestBed, inject } from '@angular/core/testing';

import { TodofilterService } from './todofilter.service';

describe('TodofilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodofilterService]
    });
  });

  it('should be created', inject([TodofilterService], (service: TodofilterService) => {
    expect(service).toBeTruthy();
  }));
});
