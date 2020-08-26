import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NonAutoCarouselComponent } from './components/non-auto-carousel/non-auto-carousel.component';



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
