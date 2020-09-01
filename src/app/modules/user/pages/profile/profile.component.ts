import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public $user: UserService
  ) { }

  ngOnInit(): void {
  }

}
