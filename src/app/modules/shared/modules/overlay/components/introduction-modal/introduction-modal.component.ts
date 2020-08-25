import { takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { IModalOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize } from '@utilities/enums/overlay.enum';
import { WindowService } from '@services//window.service';
import { UnsubOndestroy } from '@utilities/abstract/unsub-ondestroy';

@Component({
  selector: 'app-introduction-modal',
  templateUrl: './introduction-modal.component.html',
  styleUrls: ['./introduction-modal.component.scss']
})
export class IntroductionModalComponent extends UnsubOndestroy implements OnInit {

  constructor(
    public $window: WindowService
  ) {
    super();
  }

  public options: IModalOptions = {
    size: EModalSize.Large,
    hideClose: true,
    // disabledOutsideClose: true
  };

  public isVertical = false;

  public introductions = [
    'assets/images/introduction/intro.png',
    'assets/images/introduction/intro2.png',
    'assets/images/introduction/intro3.png',
    'assets/images/introduction/intro4.png',
  ]

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
