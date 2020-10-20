import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ActivityComponent } from './components/activity/activity.component';
import { NewsComponent } from './components/news/news.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { OutcomeCardComponent } from './components/outcome-card/outcome-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    ActivityComponent,
    NewsComponent,
    AboutUsComponent,
    OutcomeComponent,
    OutcomeCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
