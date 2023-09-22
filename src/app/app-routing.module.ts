import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './public-layout/componentes/create_account/sign-up/sign-up.component';
import { HomeComponent } from './public-layout/home/home.component';
import { LoginComponent } from './public-layout/componentes/login/login.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { DashboardHomeComponent } from './login-layout/dashboard/dashboard-views/dashboard-home/dashboard-home.component';
import { ProfessoresComponent } from './login-layout/dashboard/dashboard-views/professores/professores.component';
import { CadastroProfessoresComponent } from './login-layout/dashboard/dashboard-views/professores/cadastro-professores/cadastro-professores.component';
import { ProfessoresUpdateComponent } from './login-layout/dashboard/dashboard-views/professores/professores-update/professores-update.component';
import { ProfessoresDeleteComponent } from './login-layout/dashboard/dashboard-views/professores/professores-delete/professores-delete.component';

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
    path: 'dashboard', component: LoginLayoutComponent,
    children: [
      {
        path: '', component: DashboardHomeComponent
      },
      {
        path: 'dashboard-home', component: DashboardHomeComponent
      },
      {
        path: 'professores', component: ProfessoresComponent,
      },
      {
        path: 'professores/cadastro-professores', component: CadastroProfessoresComponent
      },
      {
        path: 'professores/update-professores/:id', component: ProfessoresUpdateComponent
      },
      {
        path: 'professores/delete-professores/:id', component: ProfessoresDeleteComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
