import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnResultComponent } from './own-result.component';

describe('OwnResultComponent', () => {
  let component: OwnResultComponent;
  let fixture: ComponentFixture<OwnResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
