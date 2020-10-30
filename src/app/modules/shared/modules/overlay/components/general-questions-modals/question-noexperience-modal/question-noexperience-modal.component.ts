import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/models/modal.model';

@Component({
  selector: 'app-question-noexperience-modal',
  templateUrl: './question-noexperience-modal.component.html',
  styleUrls: ['./question-noexperience-modal.component.scss']
})
export class QuestionNoexperienceModalComponent implements OnInit {
  @Input() modal: Modal;
  constructor() { }

  ngOnInit(): void {
  }

}
