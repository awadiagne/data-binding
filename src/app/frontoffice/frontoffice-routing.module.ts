import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './components/chat/chat.component';
import { DetailsComponent } from './components/details/details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TodoComponent } from './components/todo/todo.component';
import { FrontofficeComponent } from './frontoffice.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path : "",
    component : FrontofficeComponent,
    children : [
      {
        path : "chat",
        component: ChatComponent
      },
      {
        path : "todo/:id",
        component : DetailsComponent
      },
      {
        path : "profile",
        component : ProfileComponent  
      },
      {
        path : "todo",
        component : TodoComponent
      },
      {
        path : "home",
        component : HomeComponent
      },
      {
        path : "",
        redirectTo : "home",
        pathMatch : "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
