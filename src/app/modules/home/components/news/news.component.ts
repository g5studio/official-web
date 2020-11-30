import { Component, OnInit } from '@angular/core';
import { WindowService } from '@services/window.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { EDeviceType } from '@utilities/enums/overlay.enum';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent extends UnsubOndestroy implements OnInit {

  constructor(
    private $window: WindowService
  ) {
    super();
  }

  public current = 1;
  public interval: any;
  public isSliding = false;
  private news = [];
  get queue() {
    const NEXT = this.current + 1 > this.news.length ? 1 : this.current + 1;
    return [
      this.news[this.current - 1],
      this.news[NEXT - 1]
    ];
  }

  get indexs() {
    return this.queue.map((_, index) => index + 1)
  }

  ngOnInit(): void {
    this.interval = setInterval(
      _ => this.slide(),
      3000
    );

    this.$window.device$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      device => {
        switch (device) {
          case EDeviceType.Mobile:
            this.news = [
              'assets/images/ads/2020_12_ntut_unity_mobile.png',
              'assets/images/ads/2021_01_frontend_mobile.png',
            ];
            break;
          default:
            this.news = [
              'assets/images/ads/2020_12_ntut_unity_desktop.png',
              'assets/images/ads/2021_01_frontend_desktop.png',
            ]
            break;
        }
      }
    )
  }

  public mouseIn() {
    clearInterval(this.interval);
  }

  public mouseLeave() {
    this.interval = setInterval(
      _ => this.slide(),
      3000
    );
  }

  public updateCurrent(current?: number) {
    this.current = current || (this.current + 1 > this.news.length ? 1 : this.current + 1);
  }

  private slide() {
    this.isSliding = true;
    setTimeout(
      _ => {
        this.updateCurrent();
        this.isSliding = false;
      }, 1600
    );
  }

}
