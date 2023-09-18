import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Modulos creado por mi
import { LoginModule } from './modulos/login/login.module';
import { HomeModule } from './modulos/home/home.module';


//I keep the new line
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    HomeModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit{
  ngOnInit(): void {
    localStorage.setItem('expires', '');
    localStorage.setItem('token','');
  }

  
}
