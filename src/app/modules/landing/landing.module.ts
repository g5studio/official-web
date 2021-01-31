import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PeriodCarouselComponent } from './components/period-carousel/period-carousel.component';


@NgModule({
  declarations: [
    LandingComponent,
    PeriodCarouselComponent
  ],
  imports: [
    SharedModule,
    TranslateModule,
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
