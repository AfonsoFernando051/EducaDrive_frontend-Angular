import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresDeleteComponent } from './professores-delete.component';

describe('ProfessoresDeleteComponent', () => {
  let component: ProfessoresDeleteComponent;
  let fixture: ComponentFixture<ProfessoresDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessoresDeleteComponent]
    });
    fixture = TestBed.createComponent(ProfessoresDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
