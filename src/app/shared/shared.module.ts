import { ChartsModule } from 'ng2-charts';
import { CarouselModule } from '@shared/carousel/carousel.module';
import { OverlayModule } from '@shared/overlay/overlay.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from '@shared/directives/tooltip.directive';
import { CardModule } from '@shared/card/card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from '@shared/dropdown/dropdown.module';
import { ButtonModule } from './button/button.module';
import { GeneralModule } from './general/general.module';




@NgModule({
  declarations: [
    TooltipDirective,
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
    ChartsModule,
    ButtonModule,
    GeneralModule
  ],
  exports: [
    TooltipDirective,
    TranslatePipe,
    CardModule,
    OverlayModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    ChartsModule,
    GeneralModule,
    ButtonModule
  ]
})
export class SharedModule { }
