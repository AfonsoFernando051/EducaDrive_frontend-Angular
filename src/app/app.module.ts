import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public-layout/home/home.component';
import { CabecalhoComponent } from './public-layout/componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './public-layout/componentes/rodape/rodape.component';
import { SignUpComponent } from './public-layout/componentes/create_account/sign-up/sign-up.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './public-layout/componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { LoginLayoutComponent } from './login-layout/login-layout.component';
import { DashboardCabecalhoComponent } from './login-layout/dashboard/dashboard-componentes/dashboard-cabecalho/dashboard-cabecalho.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardFooterComponent } from './login-layout/dashboard/dashboard-componentes/dashboard-footer/dashboard-footer.component';
import { DashboardNavComponent } from './login-layout/dashboard/dashboard-componentes/dashboard-nav/dashboard-nav.component';
import { DashboardHomeComponent } from './login-layout/dashboard/dashboard-views/dashboard-home/dashboard-home.component';
import { MatCardModule } from '@angular/material/card';
import { ProfessoresComponent } from './login-layout/dashboard/dashboard-views/professores/professores.component'
import { MatButtonModule } from '@angular/material/button';
import { CadastroProfessoresComponent } from './login-layout/dashboard/dashboard-views/professores/cadastro-professores/cadastro-professores.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    SignUpComponent,
    LoginComponent,
    PublicLayoutComponent,
    LoginLayoutComponent,
    DashboardCabecalhoComponent,
    DashboardFooterComponent,
    DashboardNavComponent,
    DashboardHomeComponent,
    ProfessoresComponent,
    CadastroProfessoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
