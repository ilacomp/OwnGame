import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnQuestionComponent } from './own-question.component';

describe('OwnQuestionComponent', () => {
  let component: OwnQuestionComponent;
  let fixture: ComponentFixture<OwnQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
