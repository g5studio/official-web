import { LayoutCardComponent } from './components/layout-card/layout-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LayoutCardComponent
  ],
  exports: [
    LayoutCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
