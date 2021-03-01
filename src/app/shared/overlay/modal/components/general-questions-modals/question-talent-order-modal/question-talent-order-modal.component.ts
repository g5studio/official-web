import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/overlay.model';

@Component({
  selector: 'app-question-talent-order-modal',
  templateUrl: './question-talent-order-modal.component.html',
  styleUrls: ['./question-talent-order-modal.component.scss']
})
export class QuestionTalentOrderModalComponent implements OnInit {
  @Input() modal: Modal;
  constructor() { }

  ngOnInit(): void {
  }

}
