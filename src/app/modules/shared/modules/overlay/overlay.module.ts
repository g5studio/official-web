import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayComponent } from './components/overlay/overlay.component';
import { IntroductionModalComponent } from './components/introduction-modal/introduction-modal.component';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    OverlayComponent,
    IntroductionModalComponent,
    ModalComponent
  ],
  exports: [
    OverlayComponent,
    IntroductionModalComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class OverlayModule { }
