import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from './core/components/page404/page404.component';

const routes: Routes = [
  {
    path : "portail",
    loadChildren : "app/frontoffice/frontoffice.module#FrontofficeModule"
  },
  {
    path : "backoffice",
    loadChildren : "app/backoffice/backoffice.module#BackofficeModule"
  },
  {
    path : "",
    redirectTo : "/portail",
    pathMatch : "full"
  },
  {
    path : "*",
    component : Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
