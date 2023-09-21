import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoresUpdateComponent } from './professores-update.component';

describe('ProfessoresUpdateComponent', () => {
  let component: ProfessoresUpdateComponent;
  let fixture: ComponentFixture<ProfessoresUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessoresUpdateComponent]
    });
    fixture = TestBed.createComponent(ProfessoresUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
