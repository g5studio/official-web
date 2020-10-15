import { CarouselModule } from './modules/carousel/carousel.module';
import { OverlayModule } from './modules/overlay/overlay.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { LanguageMenuComponent } from './components/language-menu/language-menu.component';
import { CardModule } from './modules/card/card.module';
import { ImageWaterMarkerComponent } from './components/image-water-marker/image-water-marker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagePopupComponent } from './components/message-popup/message-popup.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent,
    LanguageMenuComponent,
    ImageWaterMarkerComponent,
    MessagePopupComponent,
    ButtonComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    OverlayModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TooltipDirective,
    TooltipComponent,
    LanguageMenuComponent,
    TranslatePipe,
    CardModule,
    OverlayModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    ImageWaterMarkerComponent,
    MessagePopupComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
