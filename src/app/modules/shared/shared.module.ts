import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipComponent } from './components/tooltip/tooltip.component';



@NgModule({
  declarations: [
    TooltipDirective,
    TooltipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TooltipDirective,
    TooltipComponent
  ]
})
export class SharedModule { }
