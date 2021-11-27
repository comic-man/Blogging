import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './Home/Login/Login.component';
import { SignComponent } from './Home/Sign/Sign.component';
import { NavComponent } from './Nav/Nav.component';


@NgModule({
  declarations: [
    AppComponent,
      HomeComponent,
      SignComponent,
      LoginComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
