import { Component, OnInit } from '@angular/core';
import { WindowService } from '@services/window.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent extends UnsubOndestroy implements OnInit {

  constructor(
    private $window: WindowService
  ) {
    super();
  }

  public isVertical = false;

  public images = [
    'assets/images/about_us_train.png',
    'assets/images/about_us_case.png',
    'assets/images/about_us_cooperation.png',
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
