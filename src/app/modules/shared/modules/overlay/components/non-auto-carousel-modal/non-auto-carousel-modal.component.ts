import { Modal } from './../../models/modal.model';
import { Component, OnInit, Input } from '@angular/core';
import { IModalOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-non-auto-carousel-modal',
  templateUrl: './non-auto-carousel-modal.component.html',
  styleUrls: ['./non-auto-carousel-modal.component.scss']
})
export class NonAutoCarouselModalComponent implements OnInit {

  @Input() modal: Modal;

  constructor() { }

  ngOnInit(): void {
  }

}
