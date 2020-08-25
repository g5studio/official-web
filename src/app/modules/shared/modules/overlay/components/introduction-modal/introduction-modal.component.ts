import { Component, OnInit } from '@angular/core';
import { IModalOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-introduction-modal',
  templateUrl: './introduction-modal.component.html',
  styleUrls: ['./introduction-modal.component.scss']
})
export class IntroductionModalComponent implements OnInit {

  constructor() { }

  public options: IModalOptions = {
    size: EModalSize.Large,
    hideClose: true,
    // disabledOutsideClose: true
  }

  ngOnInit(): void {
  }

}
