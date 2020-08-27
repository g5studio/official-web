import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, Input, HostListener } from '@angular/core';
import { WindowService } from '@services//window.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';
import { EDeviceType } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-non-auto-carousel',
  templateUrl: './non-auto-carousel.component.html',
  styleUrls: ['./non-auto-carousel.component.scss']
})
export class NonAutoCarouselComponent extends UnsubOndestroy implements OnInit {

  @Input() images = [];

  constructor(
    private $window: WindowService
  ) {
    super();
  }

  private show = 2;
  private space = 32;
  private device: EDeviceType;
  public index = 0;
  public offset = 0;
  public imgWidth = 240;

  @HostListener('window: resize') OnResize() {
    if (this.$window.isMobile(this.device)) {
      this.imgWidth = this.$window.windowWidth - (59.594 * 2);
    }
  }

  ngOnInit(): void {
    this.$window.device$.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe(
      device => {
        this.device = device;
        switch (device) {
          case EDeviceType.Desktop: this.resizeToDesktop(); break;
          case EDeviceType.Pad: this.resizeToPad(); break;
          case EDeviceType.Mobile: this.resizeToMobile(); break;
        }
      }
    );
  }

  public calcWindowWidth() {
    return (this.imgWidth + this.space) * (this.show - 1) + this.imgWidth;
  }

  public previous() {
    this.index = this.index - 1;
    this.offset = this.offset + this.imgWidth + this.space;
  }

  public next() {
    this.index = this.index + 1;
    this.offset = this.offset - this.imgWidth - this.space;
  }

  public isPreviousVisible() {
    return this.index > 0;
  }

  public isNextVisible() {
    return this.index < (this.images.length - this.show);
  }

  private resizeToDesktop() {
    this.show = 2;
    this.imgWidth = 240;
    this.offset = 0;
    this.index = 0;
  }

  private resizeToPad() {
    this.show = 1;
    this.imgWidth = 240;
    this.offset = 0;
    this.index = 0;
  }

  private resizeToMobile() {
    this.show = 1;
    this.imgWidth = this.$window.windowWidth - (59.594 * 2);
    this.offset = 0;
    this.index = 0;
  }
}
