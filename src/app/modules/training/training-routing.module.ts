import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingDashboardComponent } from './pages/training-dashboard/training-dashboard.component';
import { TrainingGuard } from './training.guard';


const routes: Routes = [{
  path: '',
  canActivate: [TrainingGuard],
  canActivateChild: [TrainingGuard],
  children: [
    { path: '', redirectTo: 'dashboard' },
    { path: 'dashboard', component: TrainingDashboardComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
