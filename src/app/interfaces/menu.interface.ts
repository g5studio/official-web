import { ToolTipPosition } from '../modules/shared/components/tooltip/tooltip.component';

export interface IMenuItemParms {
    icon: string;
    path: string;
    i18n: string;
    tooltip?: ToolTipPosition;
}