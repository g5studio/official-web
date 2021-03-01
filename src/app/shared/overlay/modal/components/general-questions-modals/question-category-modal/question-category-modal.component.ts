import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/overlay.model';

@Component({
  selector: 'app-question-category-modal',
  templateUrl: './question-category-modal.component.html',
  styleUrls: ['./question-category-modal.component.scss']
})
export class QuestionCategoryModalComponent implements OnInit {

  @Input() modal: Modal;

  constructor() { }

  ngOnInit(): void {
  }

}
