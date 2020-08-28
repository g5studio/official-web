import { Injectable } from '@angular/core';
import { NavigationService } from '@services//navigation.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private $navigation: NavigationService
  ) { }

  get isLogin() {
    return !!JSON.parse(sessionStorage.getItem('login'));
  }

  public login() {
    sessionStorage.setItem('login', JSON.stringify(true));
    this.$navigation.navigate('home');
  }

  public logout() {
    sessionStorage.setItem('login', JSON.stringify(false));
    this.$navigation.navigate('landing');
  }
}
