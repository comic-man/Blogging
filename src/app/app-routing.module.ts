import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Home/about-us/about-us.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Home/Login/Login.component';
import { SignComponent } from './Home/Sign/Sign.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'sign-up', component:SignComponent},
  {path:'log-in', component:LoginComponent},
  {path:'about-us',component:AboutUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = []
