import { Component, HostListener } from '@angular/core';
import { LanguageService } from '@services//language.service';
import { WindowService } from '@services//window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private $language: LanguageService,
    private $window: WindowService
  ) {
    this.$language.inital();
    this.$window.resize();
  }

  @HostListener('window:resize') onWindowResize() {
    this.$window.resize();
  }
}
