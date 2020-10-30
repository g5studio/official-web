import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/models/modal.model';

@Component({
  selector: 'app-question-project-modal',
  templateUrl: './question-project-modal.component.html',
  styleUrls: ['./question-project-modal.component.scss']
})
export class QuestionProjectModalComponent implements OnInit {
  @Input() modal: Modal;
  constructor() { }

  ngOnInit(): void {
  }

}
