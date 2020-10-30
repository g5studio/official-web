import { CarouselModule } from './../carousel/carousel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionModalComponent } from './components/introduction-modal/introduction-modal.component';
import { ModalComponent } from './components/modal/modal.component';
import { OverlayComponent } from './pages/overlay/overlay.component';
import { ModalProviderComponent } from './pages/modal-provider/modal-provider.component';
import { DialogProviderComponent } from './pages/dialog-provider/dialog-provider.component';
import { NonAutoCarouselModalComponent } from './components/non-auto-carousel-modal/non-auto-carousel-modal.component';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SingUpModalComponent } from './components/sing-up-modal/sing-up-modal.component';
import { UserProfileEditDialogComponent } from './components/user-profile-edit-dialog/user-profile-edit-dialog.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { DropdownModule } from '../dropdown/dropdown.module';
import { QuestionUpgradeModalComponent } from './components/general-questions-modals/question-upgrade-modal/question-upgrade-modal.component';
import { QuestionTeachModalComponent } from './components/general-questions-modals/question-teach-modal/question-teach-modal.component';
import { QuestionNoexperienceModalComponent } from './components/general-questions-modals/question-noexperience-modal/question-noexperience-modal.component';
import { QuestionCategoryModalComponent } from './components/general-questions-modals/question-category-modal/question-category-modal.component';
import { QuestionChargeModalComponent } from './components/general-questions-modals/question-charge-modal/question-charge-modal.component';
import { QuestionTalentOrderModalComponent } from './components/general-questions-modals/question-talent-order-modal/question-talent-order-modal.component';
import { QuestionTrainingModalComponent } from './components/general-questions-modals/question-training-modal/question-training-modal.component';
import { QuestionProjectModalComponent } from './components/general-questions-modals/question-project-modal/question-project-modal.component';
import { QuestionAdvisorModalComponent } from './components/general-questions-modals/question-advisor-modal/question-advisor-modal.component';
import { GeneralQuestionModalComponent } from './components/general-questions-modals/general-question-modal/general-question-modal.component';



@NgModule({
  declarations: [
    OverlayComponent,
    IntroductionModalComponent,
    ModalComponent,
    ModalProviderComponent,
    DialogProviderComponent,
    NonAutoCarouselModalComponent,
    LoginModalComponent,
    SingUpModalComponent,
    UserProfileEditDialogComponent,
    DialogComponent,
    LoadingComponent,
    QuestionUpgradeModalComponent,
    QuestionTeachModalComponent,
    QuestionNoexperienceModalComponent,
    QuestionCategoryModalComponent,
    QuestionChargeModalComponent,
    QuestionTalentOrderModalComponent,
    QuestionTrainingModalComponent,
    QuestionProjectModalComponent,
    QuestionAdvisorModalComponent,
    GeneralQuestionModalComponent,
  ],
  exports: [
    OverlayComponent,
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
