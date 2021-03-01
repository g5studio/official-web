import { Modal } from '@overlay/overlay.model';
import { Component, Input, OnInit } from '@angular/core';
import { EGeneralQuestionModalType } from '@utilities/enums/overlay.enum';

@Component({
  selector: 'app-general-question-modal',
  templateUrl: './general-question-modal.component.html',
  styleUrls: ['./general-question-modal.component.scss']
})
export class GeneralQuestionModalComponent implements OnInit {

  @Input() modal: Modal;

  constructor() { }

  get questionType(): typeof EGeneralQuestionModalType {
    return EGeneralQuestionModalType;
  }

  ngOnInit(): void {
  }

}
