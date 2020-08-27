import { EDeviceType } from './../../../utilities/enums/overlay.enum';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { map, filter, distinctUntilChanged, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor() {

  }

  get windowWidth() {
    return window.innerWidth;
  }

  private device: ReplaySubject<EDeviceType> = new ReplaySubject();
  public device$ = this.device.asObservable().pipe(
    distinctUntilChanged(),
    tap((device) => this.onDeviceChange(device))
  );

  public isDestop(device: EDeviceType) {
    return device === EDeviceType.Desktop;
  }

  public isPad(device: EDeviceType) {
    return device === EDeviceType.Pad;
  }


  public isMobile(device: EDeviceType) {
    return device === EDeviceType.Mobile;
  }


  public resize() {
    if (this.windowWidth > EDeviceType.Pad) {
      this.device.next(EDeviceType.Desktop);
    } else if (this.windowWidth > EDeviceType.Mobile) {
      this.device.next(EDeviceType.Pad);
    } else {
      this.device.next(EDeviceType.Mobile);
    }
  }

  private onDeviceChange(device: EDeviceType) {

  }
}
