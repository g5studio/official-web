import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './modules/layout/pages/error-page/error-page.component';
import { AuthGuard } from './auth/auth.guard';
import { LandingGuard } from './modules/landing/landing.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'guideline',
        loadChildren: () => import('./modules/guideline/guideline.module').then(m => m.GuidelineModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'training',
        loadChildren: () => import('./modules/training/training.module').then(m => m.TrainingModule)
      }
    ]
  },
  {
    path: 'landing',
    canActivate: [LandingGuard],
    loadChildren: () => import('./modules/landing/landing.module').then(m => m.LandingModule)
  },
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
