import { CarouselModule } from './../carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionModalComponent } from './components/introduction-modal/introduction-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { OverlayComponent } from './pages/overlay/overlay.component';
import { ModalProviderComponent } from './pages/modal-provider/modal-provider.component';
import { DialogProviderComponent } from './pages/dialog-provider/dialog-provider.component';
import { NonAutoCarouselModalComponent } from './components/non-auto-carousel-modal/non-auto-carousel-modal.component';



@NgModule({
  declarations: [
    OverlayComponent,
    IntroductionModalComponent,
    ModalComponent,
    ModalProviderComponent,
    DialogProviderComponent,
    NonAutoCarouselModalComponent,
  ],
  exports: [
    OverlayComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class OverlayModule { }
