import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from '@services//navigation.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private $navigation: NavigationService,
    private $auth: AuthService
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (state.url === '/') {
      this.$navigation.navigate('home');
    }
    return this.isAuth(state.url);
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAuth(state.url);
  }

  private isAuth(url: string) {
    if (url !== '/landing' && !this.$auth.isLogin) {
      this.$navigation.navigate('landing');
      return true;
    }

    if (url === '/landing' && this.$auth.isLogin) {
      this.$navigation.navigate('home');
    }

    return !!this.$auth.isLogin || url === '/landing';
  }

}
