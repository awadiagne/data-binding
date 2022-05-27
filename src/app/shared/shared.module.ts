import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { TaskService } from './services/task.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent,
    TruncatePipe
  ],
  exports: [
    FooterComponent, 
    HeaderComponent,
    FormsModule,
    MaterialModule
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    TaskService
  ]
})
export class SharedModule { }
