import { EModalSize, EModalProvider, EMessage } from './../enums/overlay.enum';
export interface IModalOptions {
    size?: EModalSize;
    hideClose?: boolean;
    disabledOutsideClose?: boolean;
    hideBackground?: boolean;
    config?: any;
}

export interface IMessagePopupOptions {
    alert: boolean;
    message: EMessage;
    hideClose?: boolean;
    timer?: number;
}
