import { IMenuItemParms } from '@utilities/interfaces/layout.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout-card',
  templateUrl: './layout-card.component.html',
  styleUrls: ['./layout-card.component.scss']
})
export class LayoutCardComponent implements OnInit {

  @Input() hideHead;

  constructor() { }

  ngOnInit(): void {
  }

}
