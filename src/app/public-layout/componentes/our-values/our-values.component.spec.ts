import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurValuesComponent } from './our-values.component';

describe('OurValuesComponent', () => {
  let component: OurValuesComponent;
  let fixture: ComponentFixture<OurValuesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurValuesComponent]
    });
    fixture = TestBed.createComponent(OurValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
