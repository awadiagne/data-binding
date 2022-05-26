import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../frontoffice/home/home.component';
import { BackofficeComponent } from './backoffice.component';
import { ActualitesComponent } from './components/actualites/actualites.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path : "",
    component : BackofficeComponent,
    children : [
      {
        path : "actualites",
        component: ActualitesComponent
      },
      {
        path : "profile",
        component : ProfileComponent
      },
      {
        path : "users",
        component : UsersComponent  
      },
      {
        path : "dashboard",
        component : DashboardComponent
      },
      {
        path : "",
        redirectTo : "dashboard",
        pathMatch : "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
