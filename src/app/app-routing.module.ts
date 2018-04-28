import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthenticatorComponent } from './authenticator/authenticator.component';
const routes: Routes = [
    { path: "login", component: AuthenticatorComponent },
    { path: "dashboard", component: DashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }