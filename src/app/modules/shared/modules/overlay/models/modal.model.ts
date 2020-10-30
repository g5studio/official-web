import { IModalOptions, IMessagePopupOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize, EModalProvider } from '@utilities/enums/overlay.enum';

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

