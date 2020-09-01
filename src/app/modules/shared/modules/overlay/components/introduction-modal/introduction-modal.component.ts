import { Modal } from './../../models/modal.model';
import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { IModalOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize } from '@utilities/enums/overlay.enum';
import { WindowService } from '@services//window.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { OverlayService } from '@services//overlay.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-introduction-modal',
  templateUrl: './introduction-modal.component.html',
  styleUrls: ['./introduction-modal.component.scss']
})
export class IntroductionModalComponent extends UnsubOndestroy implements OnInit {

  @Input() modal: Modal;

  constructor(
    public $window: WindowService,
    private $overlay: OverlayService,
    private $auth: AuthService
  ) {
    super();
    this.$overlay.onClose$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      _ => {
        this.$auth.firstLogin();
      }
    );
  }

  public isVertical = false;

  // 工作室特色簡介
  public introductions = [
    'assets/images/introduction/intro.png',
    'assets/images/introduction/intro2.png',
    'assets/images/introduction/intro3.png',
    'assets/images/introduction/intro4.png',
  ];

  ngOnInit(): void {
    this.$window.device$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      device => {
        this.isVertical = this.$window.isMobile(device);
      }
    );
  }

}
