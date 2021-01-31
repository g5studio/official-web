import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    DropdownComponent,
    LanguageMenuComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    DropdownComponent,
    LanguageMenuComponent
  ]
})
export class DropdownModule { }
