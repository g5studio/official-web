import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/overlay.model';

@Component({
  selector: 'app-question-charge-modal',
  templateUrl: './question-charge-modal.component.html',
  styleUrls: ['./question-charge-modal.component.scss']
})
export class QuestionChargeModalComponent implements OnInit {
  @Input() modal: Modal;
  constructor() { }

  ngOnInit(): void {
  }

}
