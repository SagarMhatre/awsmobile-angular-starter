import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from "@angular/router";
import {  ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-authenticator',
  template: `
    <amplify-authenticator></amplify-authenticator> 
   `,
  styleUrls: ['./authenticator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AuthenticatorComponent implements OnInit {

  constructor(private _amplifyService: AmplifyService, private _router: Router) {
    this._amplifyService.authStateChange$
      .subscribe(authState => {
        if (authState.state === 'signedIn' || authState.state === 'confirmSignIn') {
          this._router.navigate(['dashboard']);
        };
      });
  }

  ngOnInit() {
  }

}
