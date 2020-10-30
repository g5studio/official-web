import { LayoutCardComponent } from './components/layout-card/layout-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';



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
