import { Component, OnInit } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  signedIn: boolean;
  greeting: string;

  constructor(private _amplifyService: AmplifyService, private _router: Router) {
    this.subscribe();
  }

  subscribe() {
    this._amplifyService.authStateChange$
      .subscribe(state => this.setAuthState(state));
  }

  setAuthState(authState) {
    this.signedIn = (authState.state === 'signedIn' || authState.state === 'confirmSignIn');
    this.greeting = this.signedIn
      ? "Hello " + authState.user.username
      : "";
    if (!this.signedIn) {
      this._router.navigate(['login']);
    }
  }

  onSignOut() {
    this._amplifyService.auth().signOut();
  }

  ngOnInit() {
  }

}
