import { Component, OnInit, OnDestroy, ElementRef, ViewChild, Input } from '@angular/core';
import { OverlayService } from '@services//overlay.service';
import { IModalOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {

  @ViewChild('tmodal') tmodal: ElementRef;
  @Input() options: IModalOptions = {
    size: EModalSize.Small,
    hideClose: false,
    disabledOutsideClose: false,
    hideBackground: false
  };

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
    if (!this.tmodal.nativeElement.contains(click.target)) {
      this.$overlay.closeAll(click);
    }
  }

  ngOnDestroy() {
    if (!this.options.disabledOutsideClose) {
      removeEventListener('click', this.e);
    }
  }
}
