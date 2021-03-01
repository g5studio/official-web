import { ELanguage } from '@utilities/enums/language.enum';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AbstractModal } from '@utilities/abstract/modal';
import { LanguageService } from '@services//language.service';

@Component({
  selector: 'app-language-menu',
  templateUrl: './language-menu.component.html',
  styleUrls: ['./language-menu.component.scss']
})
export class LanguageMenuComponent extends AbstractModal implements OnInit {

  @Input() showIcon;
  @Input() white;

  constructor(
    public $translate: TranslateService,
    private $language: LanguageService,
  ) {
    super();
  }

  ngOnInit(): void {
  }

  public setLanguage(language: ELanguage) {
    this.$language.setLanguage(language);
    this.collapse();
  }

}
