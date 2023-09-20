import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './componentes/create_account/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:  'full'
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard/dashboard-home',
    component: DashboardHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
