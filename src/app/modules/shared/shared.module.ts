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
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent,
    LanguageMenuComponent,
    ImageWaterMarkerComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    CardModule,
    OverlayModule,
    CarouselModule,
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
    ImageWaterMarkerComponent
  ]
})
export class SharedModule { }
