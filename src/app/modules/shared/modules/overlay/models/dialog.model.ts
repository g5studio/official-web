import { EDialogProvider } from '@utilities/enums/overlay.enum';
import { IDialogOptions } from '@utilities/interfaces/overlay.interface';

export class Dialog {
    constructor(
        public provider: EDialogProvider,
        public options?: IDialogOptions
    ) {

    }
}