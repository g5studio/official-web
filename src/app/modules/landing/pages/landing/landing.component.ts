import { EModalProvider, EModalSize } from '@utilities/enums/overlay.enum';
import { tap, switchMap, takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { timer, of } from 'rxjs';
import { WindowService } from '@services//window.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { AuthService } from 'src/app/auth/auth.service';
import { OverlayService } from '@services/overlay.service';
import { Modal } from '@overlay/models/modal.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent extends UnsubOndestroy implements OnInit {

  constructor(
    public $auth: AuthService,
    private $window: WindowService,
    public $overlay: OverlayService
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

  public toggleLoginModal(event: MouseEvent) {
    this.$overlay.toggleModal(
      new Modal(EModalProvider.Login, {
        size: EModalSize.Large,
        hideClose: true,
      }), event
    );
  }

  public toggleSingupModal(event: MouseEvent) {
    this.$overlay.toggleModal(
      new Modal(EModalProvider.Singup, {
        size: EModalSize.Large,
        hideClose: true,
      }), event
    );
  }

  private onAnimationLogoRotationStart() {
    this.rotationStart = true;
  }

  private onAnimationLogoRotationEnd() {
    this.rotationEnd = true;
  }
}
