import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';
import { MENU_LIST, MENU_SET } from './menu-list';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() currentPath: string;

  public menuList = MENU_LIST;
  public setting = MENU_SET;

  constructor(
    private $navigation: NavigationService
  ) { }

  ngOnInit(): void {
  }

  public navigate(path: string) {
    this.$navigation.navigate(path);
  }

}
