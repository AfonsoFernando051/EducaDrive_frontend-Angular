import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './componentes/create_account/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
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
