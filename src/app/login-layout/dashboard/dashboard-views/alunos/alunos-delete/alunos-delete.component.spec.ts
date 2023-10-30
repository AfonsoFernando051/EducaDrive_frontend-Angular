import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosDeleteComponent } from './alunos-delete.component';

describe('AlunosDeleteComponent', () => {
  let component: AlunosDeleteComponent;
  let fixture: ComponentFixture<AlunosDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosDeleteComponent]
    });
    fixture = TestBed.createComponent(AlunosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
