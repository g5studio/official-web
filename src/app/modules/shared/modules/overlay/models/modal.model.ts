import { IModalOptions } from '@utilities/interfaces/overlay.interface';
import { EModalSize, EModalProvider } from '@utilities/enums/overlay.enum';

export class Modal {

    constructor(
        public provider: EModalProvider,
        public options?: IModalOptions
    ) {
        this.initalModalOptions();
    }

    private initalModalOptions() {
        this.options.size = this.options.size || EModalSize.Small;
    }
}
