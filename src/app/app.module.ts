import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routing';
import { MembersComponent } from './members/members.component';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MatIconModule, 
  MatButtonModule, 
  MatDialogModule, 
  MatExpansionModule, 
  MatListModule,
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule
} from "@angular/material";
import 'hammerjs';
import { NgxPaginationModule } from 'ngx-pagination';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from './data.service';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import { YesOrNoComponent } from './yes-or-no/yes-or-no.component';
import { YesOrNoService } from './yes-or-no/yes-or-no.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AUTH_PROVIDERS } from './auth/authentication.service';
import { LogguedInGuard } from './auth/loggued-in.guard';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    DialogComponent,
    ErrorHandleComponent,
    AdminComponent,
    EditDialogComponent,
    YesOrNoComponent,
    AuthComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule, 
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatListModule,
    MatSnackBarModule,
    FormsModule, 
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgxPaginationModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent],
  providers: [
    DialogService, 
    DataService, 
    YesOrNoService,
    AuthService,
    AUTH_PROVIDERS,
    LogguedInGuard
  ],
  entryComponents: [
    DialogComponent,
    EditDialogComponent,
    YesOrNoComponent,
    AuthComponent
  ],
})
export class AppModule { }
