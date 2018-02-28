import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnCategoriesComponent } from './own-categories.component';

describe('OwnCategoriesComponent', () => {
  let component: OwnCategoriesComponent;
  let fixture: ComponentFixture<OwnCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
