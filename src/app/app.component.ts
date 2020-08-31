import { Component, HostListener, OnInit } from '@angular/core';
import { LanguageService } from '@services//language.service';
import { WindowService } from '@services//window.service';
import { NavigationService } from '@services//navigation.service';
import { FirebaseService } from '@services//firebase.service';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private $language: LanguageService,
    private $window: WindowService,
    public $navigation: NavigationService,
    private $firebase: FirebaseService,
    public $auth: AuthService
  ) {
    this.$language.inital();
    this.$window.resize();
  }

  @HostListener('window:resize') onWindowResize() {
    this.$window.resize();
  }

  ngOnInit() {

  }
}
