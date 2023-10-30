import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosUpdateComponent } from './alunos-update.component';

describe('AlunosUpdateComponent', () => {
  let component: AlunosUpdateComponent;
  let fixture: ComponentFixture<AlunosUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosUpdateComponent]
    });
    fixture = TestBed.createComponent(AlunosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
