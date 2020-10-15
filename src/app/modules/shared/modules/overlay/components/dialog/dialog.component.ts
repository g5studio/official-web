import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { OverlayService } from '@services/overlay.service';
import { EModalSize } from '@utilities/enums/overlay.enum';
import { IDialogOptions } from '@utilities/interfaces/overlay.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit, OnDestroy {

  @ViewChild('tDialog') dialog: ElementRef;
  @Input() options: IDialogOptions = {
    size: EModalSize.Middle,
    hideClose: false,
    disabledOutsideClose: false,
    hideBackground: false
  }

  constructor(
    public $overlay: OverlayService
  ) { }

  private e = this.clickEvent.bind(this);

  ngOnInit(): void {
    if (!this.options.disabledOutsideClose) {
      addEventListener('click', this.e);
    }
  }

  private clickEvent(click: MouseEvent) {
    if (!this.dialog.nativeElement.contains(click.target)) {
      this.$overlay.closeAll();
    }
  }

  ngOnDestroy() {
    if (!this.options.disabledOutsideClose) {
      removeEventListener('click', this.e);
    }
  }

}
