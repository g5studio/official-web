import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/services/user.service';
import { OverlayService } from '@services/overlay.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public $user: UserService,
    public $overlay: OverlayService
  ) { }

  ngOnInit(): void {
  }

}
