import { EModalSize } from './../enums/overlay.enum';
export interface IModalOptions {
    size: EModalSize;
    hideClose?: boolean;
    disabledOutsideClose?: boolean;
}
