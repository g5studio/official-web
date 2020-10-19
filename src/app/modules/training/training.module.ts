import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TrainingDashboardComponent } from './pages/training-dashboard/training-dashboard.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [TrainingDashboardComponent],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedModule
  ]
})
export class TrainingModule { }
