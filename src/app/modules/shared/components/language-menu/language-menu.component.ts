import { ELanguage } from './../../../../enums/language.enum';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Modal } from '@utilities/modal';
import { LanguageService } from '@services//language.service';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent extends Modal implements OnInit {
  constructor(
    public $translate: TranslateService,
    private $language: LanguageService
  ) {
    super();
  }

  ngOnInit(): void {
  }

  public setLanguage(language: string) {
    this.$language.setLanguage(language);
    this.collapse();
  }

}
