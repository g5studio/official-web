import { EModalSize, EModalProvider } from './../enums/overlay.enum';
export interface IModalOptions {
    size?: EModalSize;
    hideClose?: boolean;
    disabledOutsideClose?: boolean;
    hideBackground?: boolean;
    config?: any;
}
