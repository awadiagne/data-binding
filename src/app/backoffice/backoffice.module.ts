import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { ActualitesComponent } from './components/actualites/actualites.component';
import { UsersComponent } from './components/users/users.component';



@NgModule({
  declarations: [ProfileComponent, ActualitesComponent, UsersComponent],
  imports: [
    CommonModule
  ]
})
export class BackofficeModule { }
