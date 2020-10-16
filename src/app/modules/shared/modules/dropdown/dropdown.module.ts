import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
