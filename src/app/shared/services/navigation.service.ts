import { Injectable } from '@angular/core';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService extends UnsubOndestroy {

  constructor(
    private router: Router
  ) {
    super();
    this.router.events.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      event => {
        if (event instanceof NavigationEnd) {
          this.route.next(event.url);
        }
      }
    );
  }

  public navigate(path: string) {
    this.router.navigateByUrl(path);
  }

  private route: Subject<string> = new Subject();
  public route$ = this.route.asObservable().pipe(
    tap(path => this.onRouteChanged(path))
  );

  private onRouteChanged(path: string) {
    if (path === '/') {
      this.router.navigateByUrl('home');
    }
  }



}
