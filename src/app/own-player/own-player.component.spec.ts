import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPlayerComponent } from './own-player.component';

describe('OwnPlayerComponent', () => {
  let component: OwnPlayerComponent;
  let fixture: ComponentFixture<OwnPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
