import { Component, OnInit } from '@angular/core';
import { PROFILE } from './header.config';
import { NavigationService } from 'src/app/modules/shared/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public $navigation: NavigationService
  ) { }

  public profile = PROFILE;

  ngOnInit(): void {
  }

}
