import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NavigationService } from '@services/navigation.service';
import { UserService } from '@user/services/user.service';
import { EIdentity } from '@utilities/enums/user.enum';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingGuard implements CanActivate, CanActivateChild {

  constructor(
    private $user: UserService,
    private $navigation: NavigationService
  ) {

  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.$user.user$.pipe(
      take(1),
      map(
        user => {
          if (!state.url.split('/')[2]) {
            this.$navigation.navigate('/training/dashboard');
          }
          if (state.url !== '/training' && !state.url.includes('dashboard') && user.profile.identity !== EIdentity.Student) {
            return false;
          }
          return true;
        }
      )
    );
  }
  canActivateChild(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.$user.user$.pipe(
      take(1),
      map(
        user => {
          return true;
        }
      )
    );
  }

}
