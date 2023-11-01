import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurInterestsComponent } from './our-interests.component';

describe('OurInterestsComponent', () => {
  let component: OurInterestsComponent;
  let fixture: ComponentFixture<OurInterestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurInterestsComponent]
    });
    fixture = TestBed.createComponent(OurInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
