import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './public-layout/home/home.component';
import { CabecalhoComponent } from './public-layout/componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './public-layout/componentes/rodape/rodape.component';

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
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardFooterComponent } from './login-layout/dashboard/dashboard-componentes/dashboard-footer/dashboard-footer.component';
import { DashboardNavComponent } from './login-layout/dashboard/dashboard-componentes/dashboard-nav/dashboard-nav.component';
import { DashboardHomeComponent } from './login-layout/dashboard/dashboard-views/dashboard-home/dashboard-home.component';
import { MatCardModule } from '@angular/material/card';
import { ProfessoresComponent } from './login-layout/dashboard/dashboard-views/professores/home-professores/professores.component';
import { MatButtonModule } from '@angular/material/button';
import { CadastroProfessoresComponent } from './login-layout/dashboard/dashboard-views/professores/cadastro-professores/cadastro-professores.component';
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReadProfessoresComponent } from './login-layout/dashboard/dashboard-views/professores/read-professores/read-professores.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProfessoresUpdateComponent } from './login-layout/dashboard/dashboard-views/professores/professores-update/professores-update.component';
import { ProfessoresDeleteComponent } from './login-layout/dashboard/dashboard-views/professores/professores-delete/professores-delete.component';
import { AlunosComponent } from './login-layout/dashboard/dashboard-views/alunos/read-alunos/alunos.component';
import { HomeAlunosComponent } from './login-layout/dashboard/dashboard-views/alunos/home-alunos/home-alunos.component';
import { AlunosUpdateComponent } from './login-layout/dashboard/dashboard-views/alunos/alunos-update/alunos-update.component';
import { MatSelectModule } from '@angular/material/select';
import { AlunosCreateComponent } from './login-layout/dashboard/dashboard-views/alunos/alunos-create/alunos-create.component';
import { AlunosDeleteComponent } from './login-layout/dashboard/dashboard-views/alunos/alunos-delete/alunos-delete.component';
import { LogoutComponent } from './login-layout/dashboard/dashboard-componentes/logout/logout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AgendaComponent } from './login-layout/dashboard/dashboard-componentes/agenda/agenda.component';
import { ConfirmationDialogComponent } from './login-layout/dashboard/dashboard-componentes/confirmation-dialog/confirmation-dialog.component';
import { LetsTakeComponent } from './public-layout/componentes/lets-take/lets-take.component';
import { LogosComponent } from './public-layout/componentes/logos/logos.component';
import { AboutUsComponent } from './public-layout/componentes/about-us/about-us.component';
import { OurInterestsComponent } from './public-layout/componentes/our-interests/our-interests.component';
import { ProductsComponent } from './public-layout/componentes/products/products.component';
import { OurValuesComponent } from './public-layout/componentes/our-values/our-values.component';
import { CurrentProjectsComponent } from './public-layout/componentes/current-projects/current-projects.component';
import { MarcarAulaComponent } from './login-layout/dashboard/dashboard-componentes/marcar-aula/marcar-aula.component';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabecalhoComponent,
    RodapeComponent,
    LoginComponent,
    PublicLayoutComponent,
    LoginLayoutComponent,
    DashboardCabecalhoComponent,
    DashboardFooterComponent,
    DashboardNavComponent,
    DashboardHomeComponent,
    ProfessoresComponent,
    CadastroProfessoresComponent,
    ReadProfessoresComponent,
    ProfessoresUpdateComponent,
    ProfessoresDeleteComponent,
    AlunosComponent,
    HomeAlunosComponent,
    AlunosUpdateComponent,
    AlunosCreateComponent,
    AlunosDeleteComponent,
    LogoutComponent,
    AgendaComponent,
    ConfirmationDialogComponent,
    LetsTakeComponent,
    LogosComponent,
    AboutUsComponent,
    OurInterestsComponent,
    ProductsComponent,
    OurValuesComponent,
    CurrentProjectsComponent,
    MarcarAulaComponent
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
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
