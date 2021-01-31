import { Component, Input, OnInit } from '@angular/core';
import { AbstractModal } from '@utilities/abstract/modal';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends AbstractModal implements OnInit {
  constructor() {
    super();
  }

  ngOnInit(): void {

  }

}
