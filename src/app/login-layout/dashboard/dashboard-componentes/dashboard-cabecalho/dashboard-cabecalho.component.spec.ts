import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCabecalhoComponent } from './dashboard-cabecalho.component';

describe('DashboardCabecalhoComponent', () => {
  let component: DashboardCabecalhoComponent;
  let fixture: ComponentFixture<DashboardCabecalhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardCabecalhoComponent]
    });
    fixture = TestBed.createComponent(DashboardCabecalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
