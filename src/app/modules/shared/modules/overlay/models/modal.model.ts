import { IModalOptions, IMessagePopupOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize, EModalProvider } from '@utilities/enums/overlay.enum';

export class Modal {

    constructor(
        public provider: EModalProvider,
        public options?: IModalOptions
    ) {
        this.initialModalOptions();
    }

    private initialModalOptions() {
        this.options.size = this.options.size || EModalSize.Small;
    }
}

export class MessagePopup {
    constructor(
        public options: IMessagePopupOptions
    ) {

    }
}

export enum EGeneralQuestionModalType {
    Upgrade = 1,
    Teach,
    NoneExperience,
    Category,
    Charge,
    TalentOrder,
    Training,
    Project,
    Advisor
}
