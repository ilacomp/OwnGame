import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnStartComponent } from './own-start.component';

describe('OwnStartComponent', () => {
  let component: OwnStartComponent;
  let fixture: ComponentFixture<OwnStartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
