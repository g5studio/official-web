import { tap, switchMap, takeUntil } from 'rxjs/operators';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { timer, of } from 'rxjs';
import { NavigationService } from '@services//navigation.service';
import { WindowService } from '@services//window.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent extends UnsubOndestroy implements OnInit {

  constructor(
    public $auth: AuthService,
    private $window: WindowService
  ) {
    super();
  }

  private animationStart$ = of([]);
  public rotationStart = false;
  public rotationEnd = false;

  public isVertical = false;

  // 工作室業務介紹
  public introductions = [
    'assets/images/introduction/intro.png',
    'assets/images/introduction/intro2.png',
    'assets/images/introduction/intro3.png',
    'assets/images/introduction/intro4.png',
  ]

  ngOnInit(): void {
    this.animationStart$.pipe(
      tap(_ => this.onAnimationLogoRotationStart()),
      switchMap(_ => timer(2000)),
      tap(_ => this.onAnimationLogoRotationEnd())
    ).subscribe();

    this.$window.device$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      device => {
        this.isVertical = this.$window.isMobile(device);
      }
    );
  }

  private onAnimationLogoRotationStart() {
    this.rotationStart = true;
  }

  private onAnimationLogoRotationEnd() {
    this.rotationEnd = true;
  }
}
