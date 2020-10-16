import { Component, Input, OnInit } from '@angular/core';
import { AbstractModal } from '@utilities/abstract/modal';
import { IDropdown } from '@shared/modules/dropdown/interfaces/dropdown.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends AbstractModal implements OnInit {

  @Input() options: IDropdown.Options;

  constructor() {
    super();
  }

  ngOnInit(): void {

  }

}
