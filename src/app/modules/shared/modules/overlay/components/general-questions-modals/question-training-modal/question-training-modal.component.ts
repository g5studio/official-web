import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/models/modal.model';

@Component({
  selector: 'app-question-training-modal',
  templateUrl: './question-training-modal.component.html',
  styleUrls: ['./question-training-modal.component.scss']
})
export class QuestionTrainingModalComponent implements OnInit {
  @Input() modal: Modal;
  constructor() { }

  ngOnInit(): void {
  }

}
