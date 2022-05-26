import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ActualitesComponent } from './components/actualites/actualites.component';
import { UsersComponent } from './components/users/users.component';
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { BackofficeComponent } from './backoffice.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [ProfileComponent, ActualitesComponent, UsersComponent, BackofficeComponent, DashboardComponent],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class BackofficeModule { }
