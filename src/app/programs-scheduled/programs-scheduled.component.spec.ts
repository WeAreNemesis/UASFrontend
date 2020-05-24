import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramsScheduledComponent } from './programs-scheduled.component';

describe('ProgramsScheduledComponent', () => {
  let component: ProgramsScheduledComponent;
  let fixture: ComponentFixture<ProgramsScheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramsScheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramsScheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
