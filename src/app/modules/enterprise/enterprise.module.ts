import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterpriseRoutingModule } from './enterprise-routing.module';
import { EnterpriseDashboardComponent } from './pages/enterprise-dashboard/enterprise-dashboard.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [EnterpriseDashboardComponent],
  imports: [
    CommonModule,
    EnterpriseRoutingModule,
    SharedModule
  ]
})
export class EnterpriseModule { }
