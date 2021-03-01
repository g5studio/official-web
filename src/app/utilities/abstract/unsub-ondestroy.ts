import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export abstract class UnsubOndestroy implements OnDestroy {
  /** Is Single Time Event */
  public onDestroy$ = new Subject<void>();
  constructor() { }

  /**
   * On the components destroy event, emit from onDestroy$ to close all Observables
   * then complete that Subject to end it.
   */
  ngOnDestroy() {
    this.unsubAll();
    this.onDestory();
  }

  private unsubAll(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  public onDestory() { }
}
