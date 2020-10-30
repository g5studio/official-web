import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelineRoutingModule } from './guideline-routing.module';
import { GuidelineComponent } from './pages/guideline/guideline.component';
import { SharedModule } from '@shared/shared.module';
import { FeatureCardComponent } from './components/feature-card/feature-card.component';
import { AboutUsComponent } from './components/about-us/about-us.component';


@NgModule({
  declarations: [GuidelineComponent, FeatureCardComponent, AboutUsComponent],
  imports: [
    CommonModule,
    GuidelineRoutingModule,
    SharedModule
  ]
})
export class GuidelineModule { }
