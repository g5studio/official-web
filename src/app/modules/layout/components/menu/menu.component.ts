import { Component, OnInit, Input } from '@angular/core';
import { NavigationService } from '@services/navigation.service';
import { MENU_LIST, MENU_SET, MENU_LOGOUT } from './menu-list';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() currentPath: string;

  public menuList = MENU_LIST;
  public setting = MENU_SET;
  public logout = MENU_LOGOUT;

  constructor(
    private $navigation: NavigationService,
    public $auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  public navigate(path: string) {
    this.$navigation.navigate(path);
  }

}
