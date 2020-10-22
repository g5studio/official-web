import { ToolTipPosition } from 'src/app/modules/shared/components/tooltip/tooltip.component';


export interface IMenuItemParms {
    icon: string;
    path: string;
    i18n: string;
    tooltip?: ToolTipPosition;
    hide?: boolean;
}

export interface ILayoutCardParms {
    hideHead?: boolean;
    hideContainerPadding?: boolean;
    hideBodyPadding?: boolean;
}
