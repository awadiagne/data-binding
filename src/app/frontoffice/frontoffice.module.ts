import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';
import { DetailsComponent } from './components/details/details.component';
import { TodoComponent } from './components/todo/todo.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './home/home.component';
import { FrontofficeComponent } from './frontoffice.component';
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ChatComponent, 
    DetailsComponent, 
    TodoComponent, 
    ProfileComponent, 
    HomeComponent, 
    FrontofficeComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule,
    SharedModule
  ]
})
export class FrontofficeModule { }
