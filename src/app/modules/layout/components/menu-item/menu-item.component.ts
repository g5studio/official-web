import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMenuItemParms } from '@utilities/interfaces/layout.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input() size: 'lg' | 'xl' | 'xxl' = 'lg';
  @Input() parms: IMenuItemParms;
  @Input() disabledTooltip;
  @Output() onclick: EventEmitter<string> = new EventEmitter();

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public checkIsCurrent() {
    return this.router.url.includes(this.parms.path);
  }

}
