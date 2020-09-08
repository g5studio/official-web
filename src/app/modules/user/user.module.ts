import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { ProfileFieldComponent } from './components/profile-field/profile-field.component';
import { LearningProcessComponent } from './components/learning-process/learning-process.component';


@NgModule({
  declarations: [
    ProfileComponent,
    BasicInfoComponent,
    ProfileFieldComponent,
    LearningProcessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
