import { IMenuItemParms } from '@utilities/interfaces/layout.interface';
import { ToolTipPosition } from 'src/app/modules/shared/components/tooltip/tooltip.component';

export const PROFILE: IMenuItemParms = {
    path: '/user/profile',
    icon: 'man',
    i18n: 'Header.Profile',
    tooltip: ToolTipPosition.Bottom
}
