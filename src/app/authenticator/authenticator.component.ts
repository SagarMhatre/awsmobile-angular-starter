import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticator',
  template: `
    <amplify-authenticator></amplify-authenticator> 
  `,
  styleUrls: ['authenticator.component.css']
})
export class AuthenticatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
