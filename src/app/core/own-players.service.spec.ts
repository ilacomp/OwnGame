import { TestBed, inject } from '@angular/core/testing';

import { OwnPlayersService } from './own-players.service';

describe('OwnPlayersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnPlayersService]
    });
  });

  it('should be created', inject([OwnPlayersService], (service: OwnPlayersService) => {
    expect(service).toBeTruthy();
  }));
});
