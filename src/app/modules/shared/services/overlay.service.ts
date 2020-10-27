import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { EOverlayType, EModalProvider, EDialogProvider } from '@utilities/enums/overlay.enum';
import { startWith, tap } from 'rxjs/operators';
import { Modal, MessagePopup } from '@overlay/models/modal.model';
import { Dialog } from '@overlay/models/dialog.model';

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

  private modal: ReplaySubject<Modal> = new ReplaySubject(1);
  public modal$ = this.modal.asObservable().pipe();

  private dialog: ReplaySubject<Dialog> = new ReplaySubject(1);
  public dialog$ = this.dialog.asObservable().pipe();

  private popup: Subject<MessagePopup> = new Subject();
  public popup$ = this.popup.asObservable().pipe(
    startWith(null as MessagePopup),
  );

  private loading: Subject<boolean> = new Subject();
  public loading$ = this.loading.asObservable().pipe(
    startWith(false)
  );

  public toggleModal(modal: Modal, event?: MouseEvent) {
    event?.stopPropagation();
    this.modal.next(modal);
    this.overlay.next(EOverlayType.Modal);
  }

  public toggleDialog(dialog: Dialog, event?: MouseEvent) {
    event?.stopPropagation();
    this.dialog.next(dialog);
    this.overlay.next(EOverlayType.Dialog);
  }

  public closeAll(event?: MouseEvent) {
    event?.stopPropagation();
    this.onClose.next();
    this.overlay.next(EOverlayType.Close);
  }

  public showPopup = (message: MessagePopup) => this.popup.next(message);
  public hidePopup = () => this.popup.next(null);


  public startLoading = () => this.loading.next(true);
  public finishLoading = () => this.loading.next(false);
}
