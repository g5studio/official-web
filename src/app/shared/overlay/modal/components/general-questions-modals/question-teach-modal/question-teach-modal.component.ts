import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/overlay.model';

@Component({
  selector: 'app-question-teach-modal',
  templateUrl: './question-teach-modal.component.html',
  styleUrls: ['./question-teach-modal.component.scss']
})
export class QuestionTeachModalComponent implements OnInit {
  @Input() modal: Modal;
  constructor() { }

  ngOnInit(): void {
  }

}
