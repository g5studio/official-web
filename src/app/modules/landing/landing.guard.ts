import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { NavigationService } from '@services/navigation.service';

@Injectable({
  providedIn: 'root'
})
export class LandingGuard implements CanActivate {

  constructor(
    private $auth: AuthService,
    private $navigation: NavigationService
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.$auth.isLogin) {
      this.$navigation.navigate('home');
    }
    return true;
  }
}
