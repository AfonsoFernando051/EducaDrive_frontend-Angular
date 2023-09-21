import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadProfessoresComponent } from './read-professores.component';

describe('ReadProfessoresComponent', () => {
  let component: ReadProfessoresComponent;
  let fixture: ComponentFixture<ReadProfessoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadProfessoresComponent]
    });
    fixture = TestBed.createComponent(ReadProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
