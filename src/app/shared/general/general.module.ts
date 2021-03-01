import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageWaterMarkerComponent } from './image-water-marker/image-water-marker.component';
import { TooltipComponent } from '@shared/general/tooltip/tooltip.component';



@NgModule({
  declarations: [
    ImageWaterMarkerComponent,
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageWaterMarkerComponent,
    TooltipComponent
  ]
})
export class GeneralModule { }
