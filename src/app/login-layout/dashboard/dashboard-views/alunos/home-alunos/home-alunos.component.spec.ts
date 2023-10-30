import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlunosComponent } from './home-alunos.component';

describe('HomeAlunosComponent', () => {
  let component: HomeAlunosComponent;
  let fixture: ComponentFixture<HomeAlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAlunosComponent]
    });
    fixture = TestBed.createComponent(HomeAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
