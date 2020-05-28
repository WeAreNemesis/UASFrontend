import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MacFilterApplicantsComponent } from './mac-filter-applicants.component';

describe('MacFilterApplicantsComponent', () => {
  let component: MacFilterApplicantsComponent;
  let fixture: ComponentFixture<MacFilterApplicantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MacFilterApplicantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MacFilterApplicantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
