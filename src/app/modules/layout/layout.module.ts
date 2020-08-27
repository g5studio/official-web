import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './pages/layout/layout.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SharedModule } from '../shared/shared.module';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';



@NgModule({
  declarations: [
    LayoutComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    MenuItemComponent,
    ErrorPageComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    LayoutComponent,
    LandingComponent
  ]
})
export class LayoutModule { }
