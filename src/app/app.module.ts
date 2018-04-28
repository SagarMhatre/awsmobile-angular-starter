import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { AuthenticatorComponent } from './authenticator/authenticator.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatorComponent
  ],
  imports: [
    BrowserModule, AmplifyAngularModule
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
