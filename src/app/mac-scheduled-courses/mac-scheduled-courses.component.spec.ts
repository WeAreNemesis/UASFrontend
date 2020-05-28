import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacScheduledCoursesComponent } from './mac-scheduled-courses.component';

describe('MacScheduledCoursesComponent', () => {
  let component: MacScheduledCoursesComponent;
  let fixture: ComponentFixture<MacScheduledCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacScheduledCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacScheduledCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
