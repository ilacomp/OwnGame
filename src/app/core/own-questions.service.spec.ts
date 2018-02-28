import { TestBed, inject } from '@angular/core/testing';

import { OwnQuestionsService } from './own-questions.service';

describe('OwnQuestionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnQuestionsService]
    });
  });

  it('should be created', inject([OwnQuestionsService], (service: OwnQuestionsService) => {
    expect(service).toBeTruthy();
  }));
});
