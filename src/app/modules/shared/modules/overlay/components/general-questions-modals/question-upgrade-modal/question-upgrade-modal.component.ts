import { Component, Input, OnInit } from '@angular/core';
import { Modal } from '@overlay/models/modal.model';

@Component({
  selector: 'app-question-upgrade-modal',
  templateUrl: './question-upgrade-modal.component.html',
  styleUrls: ['./question-upgrade-modal.component.scss']
})
export class QuestionUpgradeModalComponent implements OnInit {

  @Input() modal: Modal;

  constructor() { }

  ngOnInit(): void {
  }

}
