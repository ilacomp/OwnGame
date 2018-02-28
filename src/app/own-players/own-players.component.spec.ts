import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPlayersComponent } from './own-players.component';

describe('OwnPlayersComponent', () => {
  let component: OwnPlayersComponent;
  let fixture: ComponentFixture<OwnPlayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnPlayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
