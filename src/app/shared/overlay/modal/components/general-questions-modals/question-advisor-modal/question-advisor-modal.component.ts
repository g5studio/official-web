import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/overlay.model';

@Component({
  selector: 'app-question-advisor-modal',
  templateUrl: './question-advisor-modal.component.html',
  styleUrls: ['./question-advisor-modal.component.scss']
})
export class QuestionAdvisorModalComponent implements OnInit {

  @Input() modal: Modal;

  constructor() { }

  ngOnInit(): void {
  }

}
