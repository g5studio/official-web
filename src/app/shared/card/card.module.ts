import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutCardComponent } from './layout-card/layout-card.component';
import { DashboardCardComponent } from './dashboard-card/dashboard-card.component';



@NgModule({
  declarations: [
    LayoutCardComponent,
    DashboardCardComponent
  ],
  exports: [
    LayoutCardComponent,
    DashboardCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardModule { }
