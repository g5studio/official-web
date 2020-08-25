import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { EOverlayType } from '@utilities/enums/overlay.enum';
import { startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor() { }

  private overlay: Subject<EOverlayType> = new Subject();
  public overlay$ = this.overlay.asObservable().pipe(
    startWith(EOverlayType.Close)
  );

  public toggleModal() {
    event?.stopPropagation();
    this.overlay.next(EOverlayType.Modal);
  }

  public toggleDialog() {
    event?.stopPropagation();
    this.overlay.next(EOverlayType.Dialog);
  }

  public closeAll() {
    event?.stopPropagation();
    this.overlay.next(EOverlayType.Close);
  }

}
