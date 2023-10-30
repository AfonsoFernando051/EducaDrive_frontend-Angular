import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosCreateComponent } from './alunos-create.component';

describe('AlunosCreateComponent', () => {
  let component: AlunosCreateComponent;
  let fixture: ComponentFixture<AlunosCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlunosCreateComponent]
    });
    fixture = TestBed.createComponent(AlunosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
