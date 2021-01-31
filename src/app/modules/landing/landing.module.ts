import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SharedModule } from '@shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    SharedModule,
    TranslateModule,
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
