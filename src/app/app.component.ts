import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '@services//language.service';
import { WindowService } from '@services//window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private $language: LanguageService,
    private $window: WindowService
  ) {
    this.$language.inital();
    this.$window.resize();
  }

  get isLogin() {
    return JSON.parse(sessionStorage.getItem('login'));
  }

  @HostListener('window:resize') onWindowResize() {
    this.$window.resize();
  }

  ngOnInit() {

  }
}
