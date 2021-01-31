import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NonAutoCarouselComponent } from './non-auto-carousel/non-auto-carousel.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    CarouselComponent,
    NonAutoCarouselComponent
  ],
  exports: [
    CarouselComponent,
    NonAutoCarouselComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CarouselModule { }
