import { Router } from '@angular/router';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PROFILE } from './header.config';
import { NavigationService } from '@services/navigation.service';
import { AuthService } from 'src/app/auth/auth.service';
import { AbstractModal } from '@utilities/abstract/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends AbstractModal implements OnInit, OnChanges {

  @Input() route: string;

  constructor(
    public $navigation: NavigationService,
    public $auth: AuthService,
    private router: Router
  ) {
    super();
  }

  public profile = PROFILE;

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('route' in changes) {
      this.isOpen = false;
    }
  }

}
