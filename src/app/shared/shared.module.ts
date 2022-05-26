import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { TruncatePipe } from './pipes/truncate.pipe';



@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent,
    TruncatePipe
  ],
  exports: [
    FooterComponent, 
    HeaderComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
