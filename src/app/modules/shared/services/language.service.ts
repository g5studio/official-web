import { ELanguage } from './../../../enums/language.enum';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(
    private $translate: TranslateService
  ) { }

  public inital() {
    this.$translate.addLangs(['en', 'zh-hant']);
    this.$translate.setDefaultLang(localStorage.getItem('lan') || this.getBrowserLan());
  }

  public setLanguage(language: ELanguage) {
    this.$translate.use(language);
  }

  private getBrowserLan() {
    const browserLang = this.$translate.getBrowserLang();
    return browserLang.includes('en') ? ELanguage.English : ELanguage.Chinese;
  }
}
