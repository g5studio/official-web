import { IModalOptions, IMessagePopupOptions, IDialogOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize, EModalProvider, EDialogProvider } from '@utilities/enums/overlay.enum';

export class Dialog {
    constructor(
        public provider: EDialogProvider,
        public options?: IDialogOptions
    ) {

    }
}

export class Modal {

    constructor(
        public provider: EModalProvider,
        public options?: IModalOptions,
        public config?: any
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
