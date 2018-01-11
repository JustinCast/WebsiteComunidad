import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routing';
import { MembersComponent } from './members/members.component';
import { HttpClientModule } from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatDialogModule, MatExpansionModule, MatListModule } from "@angular/material";
import 'hammerjs';
import { DialogComponent } from './dialog/dialog.component';
import { DialogService } from './dialog/dialog.service';
import { ErrorHandleComponent } from './error-handle/error-handle.component';
import { AdminComponent } from './admin/admin.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MembersComponent,
    DialogComponent,
    ErrorHandleComponent,
    AdminComponent
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
    MatListModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent],
  providers: [DialogService, DataService],
  entryComponents: [
    DialogComponent
  ],
})
export class AppModule { }
