import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { EOverlayType, EModalProvider, EDialogProvider } from '@utilities/enums/overlay.enum';
import { startWith, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OverlayService {

  constructor() { }

  private onClose: Subject<void> = new Subject();
  public onClose$ = this.onClose.asObservable();

  private overlay: Subject<EOverlayType> = new Subject();
  public overlay$ = this.overlay.asObservable().pipe(
    startWith(EOverlayType.Close)
  );

  private modal: ReplaySubject<EModalProvider> = new ReplaySubject(1);
  public modal$ = this.modal.asObservable().pipe();

  private dialog: ReplaySubject<EDialogProvider> = new ReplaySubject(1);
  public dialog$ = this.modal.asObservable().pipe();

  public toggleModal(modal: EModalProvider) {
    event?.stopPropagation();
    this.modal.next(modal);
    this.overlay.next(EOverlayType.Modal);
  }

  public toggleDialog(dialog: EDialogProvider) {
    event?.stopPropagation();
    this.dialog.next(dialog);
    this.overlay.next(EOverlayType.Dialog);
  }

  public closeAll() {
    event?.stopPropagation();
    this.onClose.next();
    this.overlay.next(EOverlayType.Close);
  }

}
