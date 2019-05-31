import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { ViewAllUsersComponent } from './components/users/view-all-users/view-all-users.component';
import {
  LoginComponent,
  LoginDialogComponent
} from './components/users/login/login.component';

import { MatTableModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ViewAllUsersComponent,
    LoginComponent,
    LoginDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatTableModule, MatDialogModule],
  entryComponents: [LoginDialogComponent]
})
export class AppModule {}
