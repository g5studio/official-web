import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from '@shared/modules/carousel/carousel.module';
import { OverlayModule } from '@shared/modules/overlay/overlay.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from '@shared/directives/tooltip.directive';
import { TooltipComponent } from '@shared/components/tooltip/tooltip.component';
import { LanguageMenuComponent } from '@shared/components/language-menu/language-menu.component';
import { CardModule } from '@shared/modules/card/card.module';
import { ImageWaterMarkerComponent } from '@shared/components/image-water-marker/image-water-marker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagePopupComponent } from '@shared/components/message-popup/message-popup.component';
import { ButtonComponent } from '@shared/components/button/button.component';
import { DropdownModule } from '@shared/modules/dropdown/dropdown.module';




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
    FormsModule,
    DropdownModule,
    ChartsModule
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
    ButtonComponent,
    DropdownModule,
    ChartsModule
  ]
})
export class SharedModule { }
