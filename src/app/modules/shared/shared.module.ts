import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { LayoutCardComponent } from './components/layout-card/layout-card.component';



@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent,
    LayoutCardComponent,
    LanguageMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    LayoutCardComponent,
    TooltipDirective,
    TooltipComponent,
    LanguageMenuComponent,
    TranslatePipe
  ]
})
export class SharedModule { }
