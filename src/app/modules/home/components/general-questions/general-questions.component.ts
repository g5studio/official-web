import { Component, OnInit } from '@angular/core';
import { User } from '@user/models/user.model';
import { UserService } from '@user/services/user.service';

@Component({
  selector: 'app-general-questions',
  templateUrl: './general-questions.component.html',
  styleUrls: ['./general-questions.component.scss']
})
export class GeneralQuestionsComponent implements OnInit {

  constructor(
    public $user: UserService
  ) { }

  ngOnInit(): void {
  }

  public getEmailTemplate(user: User) {
    return `mailto:hr.g5studio@gmail.com?subject=${user.profile.fullName}的私人問題&body=我已經看過官方網站的常見問題，仍無法解答，問題如下：%0D%0A%0D%0A`;
  }

}
