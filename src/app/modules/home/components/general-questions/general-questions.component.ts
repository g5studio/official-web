import { environment } from './../../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { EGeneralQuestionModalType, EModalProvider } from '@utilities/enums/overlay.enum';
import { OverlayService } from '@services/overlay.service';
import { User } from '@user/models/user.model';
import { UserService } from '@user/services/user.service';
import { Modal } from '@overlay/overlay.model';

@Component({
  selector: 'app-general-questions',
  templateUrl: './general-questions.component.html',
  styleUrls: ['./general-questions.component.scss']
})
export class GeneralQuestionsComponent implements OnInit {

  constructor(
    public $user: UserService,
    private $overlay: OverlayService
  ) { }

  get modalType(): typeof EGeneralQuestionModalType {
    return EGeneralQuestionModalType;
  }

  ngOnInit(): void {
  }

  public getEmailTemplate(user: User) {
    return `mailto:hr.g5studio@gmail.com?subject=${user.profile.fullName}的私人問題&body=我已經看過官方網站的常見問題，仍無法解答，問題如下：%0D%0A%0D%0A`;
  }

  public toggleModal(type: EGeneralQuestionModalType, event: MouseEvent) {
    if (!environment.production) {
      this.$overlay.toggleModal(
        new Modal(EModalProvider.GeneralQuestion,
          {},
          {
            type
          }), event
      );
    }
  }

}
