import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { Page404Component } from './components/page404/page404.component';



@NgModule({
  declarations: [
    HighlightDirective, 
    Page404Component
  ],
  exports: [
    HighlightDirective, 
    Page404Component
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
