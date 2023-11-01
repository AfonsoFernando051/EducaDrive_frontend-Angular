import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetsTakeComponent } from './lets-take.component';

describe('LetsTakeComponent', () => {
  let component: LetsTakeComponent;
  let fixture: ComponentFixture<LetsTakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetsTakeComponent]
    });
    fixture = TestBed.createComponent(LetsTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
