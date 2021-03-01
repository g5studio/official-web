import { Component, OnInit } from '@angular/core';
import { WindowService } from '@services//window.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { AuthService } from 'src/app/auth/auth.service';
import { OverlayService } from '@services/overlay.service';
import { EUserProvider } from '@utilities/enums/user.enum';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent extends UnsubOndestroy implements OnInit {

  constructor(
    public $auth: AuthService,
    public $window: WindowService,
    public $overlay: OverlayService
  ) {
    super();
  }

  get loginProvider(): typeof EUserProvider { return EUserProvider; }

  public currentTab = 0;

  ngOnInit(): void {
  }
}
