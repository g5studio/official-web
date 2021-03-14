import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '@shared/shared.module';
import { PeriodCarouselComponent } from './components/period-carousel/period-carousel.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';


@NgModule({
  declarations: [
    LandingComponent,
    PeriodCarouselComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
