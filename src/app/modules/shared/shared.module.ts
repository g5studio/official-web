import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { CardModule } from './modules/card/card.module';



@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent,
    LanguageMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule
  ],
  exports: [
    TooltipDirective,
    TooltipComponent,
    LanguageMenuComponent,
    TranslatePipe,
    CardModule
  ]
})
export class SharedModule { }
