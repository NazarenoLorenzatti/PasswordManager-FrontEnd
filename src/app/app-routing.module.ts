import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Modulos creados por mi
import { RuteoLoginModule } from './modulos/login/ruteo-login.module';
import { RuteoHomeModule } from './modulos/home/ruteo-home.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {enableTracing: false, useHash: true}
    ),
    RuteoLoginModule,
    RuteoHomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
