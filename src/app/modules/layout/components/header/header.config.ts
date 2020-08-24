import { IMenuItemParms } from 'src/app/interfaces/menu.interface';
import { ToolTipPosition } from 'src/app/modules/shared/components/tooltip/tooltip.component';

export const PROFILE: IMenuItemParms = {
    path: 'profile',
    icon: 'man',
    i18n: '個人資料',
    tooltip: ToolTipPosition.Bottom
}
