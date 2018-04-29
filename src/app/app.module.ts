import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatorComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule, AmplifyAngularModule, AppRoutingModule ,BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
