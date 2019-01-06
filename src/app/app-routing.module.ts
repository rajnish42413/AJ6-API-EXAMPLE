import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'signup', component: SignupComponent },


  // otherwise redirect to home
  { path: '**', redirectTo: '' }

   // {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
