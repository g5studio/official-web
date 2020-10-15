import { Component, OnInit } from '@angular/core';
import { UserService } from '@user/services/user.service';
import { EIdentity } from '@utilities/enums/user.enum';

@Component({
  selector: 'app-learning-dashboard',
  templateUrl: './learning-dashboard.component.html',
  styleUrls: ['./learning-dashboard.component.scss']
})
export class LearningDashboardComponent implements OnInit {

  constructor(
    public $user: UserService
  ) { }

  get identity(): typeof EIdentity {
    return EIdentity;
  }

  ngOnInit(): void {
  }

}
