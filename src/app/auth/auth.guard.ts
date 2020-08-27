import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavigationService } from '@services//navigation.service';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(
    private $navigation: NavigationService
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

    const LOGIN = JSON.parse(sessionStorage.getItem('login'));

    if (url !== '/landing' && !LOGIN) {
      this.$navigation.navigate('landing');
      return true;
    }

    if (url === '/landing' && LOGIN) {
      this.$navigation.navigate('home');
    }

    return !!LOGIN || url === '/landing';
  }

}
