import { CarouselModule } from '@shared/carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { DropdownModule } from '@shared/dropdown/dropdown.module';
import { OverlayComponent } from '@overlay/overlay/overlay.component';
import { IntroductionModalComponent } from '@overlay/modal/components/introduction-modal/introduction-modal.component';
import { ModalComponent } from '@overlay/modal/modal.component';
import { ModalProviderComponent } from '@overlay/modal-provider/modal-provider.component';
import { DialogProviderComponent } from '@overlay/dialog-provider/dialog-provider.component';
import { GeneralQuestionModalComponent } from '@overlay/modal/components/general-questions-modals/general-question-modal/general-question-modal.component';
import { QuestionAdvisorModalComponent } from '@overlay/modal/components/general-questions-modals/question-advisor-modal/question-advisor-modal.component';
import { QuestionProjectModalComponent } from '@overlay/modal/components/general-questions-modals/question-project-modal/question-project-modal.component';
import { QuestionTrainingModalComponent } from '@overlay/modal/components/general-questions-modals/question-training-modal/question-training-modal.component';
import { QuestionTalentOrderModalComponent } from '@overlay/modal/components/general-questions-modals/question-talent-order-modal/question-talent-order-modal.component';
import { QuestionChargeModalComponent } from '@overlay/modal/components/general-questions-modals/question-charge-modal/question-charge-modal.component';
import { QuestionNoexperienceModalComponent } from '@overlay/modal/components/general-questions-modals/question-noexperience-modal/question-noexperience-modal.component';
import { LoadingComponent } from '@overlay/loading/loading.component';
import { UserProfileEditDialogComponent } from '@overlay/dialog/components/user-profile-edit-dialog/user-profile-edit-dialog.component';
import { SingUpModalComponent } from '@overlay/modal/components/sing-up-modal/sing-up-modal.component';
import { NonAutoCarouselModalComponent } from '@overlay/modal/components/non-auto-carousel-modal/non-auto-carousel-modal.component';
import { LoginModalComponent } from '@overlay/modal/components/login-modal/login-modal.component';
import { QuestionUpgradeModalComponent } from '@overlay/modal/components/general-questions-modals/question-upgrade-modal/question-upgrade-modal.component';
import { QuestionTeachModalComponent } from '@overlay/modal/components/general-questions-modals/question-teach-modal/question-teach-modal.component';
import { QuestionCategoryModalComponent } from '@overlay/modal/components/general-questions-modals/question-category-modal/question-category-modal.component';
import { DialogComponent } from '@overlay/dialog/dialog.component';
import { MessagePopupComponent } from './message-popup/message-popup.component';



@NgModule({
  declarations: [
    MessagePopupComponent,
    OverlayComponent,
    IntroductionModalComponent,
    LoginModalComponent,
    QuestionUpgradeModalComponent,
    QuestionTeachModalComponent,
    QuestionCategoryModalComponent,
    DialogComponent,
    ModalComponent,
    ModalProviderComponent,
    DialogProviderComponent,
    NonAutoCarouselModalComponent,
    SingUpModalComponent,
    SingUpModalComponent,
    UserProfileEditDialogComponent,
    ModalComponent,
    LoadingComponent,
    QuestionProjectModalComponent,
    QuestionChargeModalComponent,
    QuestionNoexperienceModalComponent,
    QuestionChargeModalComponent,
    QuestionChargeModalComponent,
    QuestionTalentOrderModalComponent,
    QuestionTrainingModalComponent,
    QuestionProjectModalComponent,
    QuestionAdvisorModalComponent,
    GeneralQuestionModalComponent,
  ],
  exports: [
    OverlayComponent,
    MessagePopupComponent
  ],
  imports: [
    TranslateModule,
    ReactiveFormsModule,
    CommonModule,
    CarouselModule,
    DropdownModule
  ]
})
export class OverlayModule { }
