import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './public-layout/componentes/create_account/sign-up/sign-up.component';
import { HomeComponent } from './public-layout/home/home.component';
import { LoginComponent } from './public-layout/componentes/login/login.component';
import { DashboardHomeComponent } from './login-layout/dashboard/dashboard-home/dashboard-home.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component:PublicLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ]
  },
  {
    path: 'dashboard/dashboard-home', component: LoginLayoutComponent,
    children: [
      {
        path: '', component: DashboardHomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
