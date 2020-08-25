import { CarouselModule } from './../carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { IntroductionModalComponent } from './components/introduction-modal/introduction-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { CarouselComponent } from '../carousel/components/carousel/carousel.component';



@NgModule({
  declarations: [
    OverlayComponent,
    IntroductionModalComponent,
    ModalComponent,
  ],
  exports: [
    OverlayComponent,
    IntroductionModalComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class OverlayModule { }
