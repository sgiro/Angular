import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCVComponent } from './liste-cv.component';

describe('ListeCVComponent', () => {
  let component: ListeCVComponent;
  let fixture: ComponentFixture<ListeCVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
