import { IMenuItemParms } from 'src/app/interfaces/layout.interface';
import { ToolTipPosition } from 'src/app/modules/shared/components/tooltip/tooltip.component';

export const PROFILE: IMenuItemParms = {
    path: 'profile',
    icon: 'man',
    i18n: 'Header.Profile',
    tooltip: ToolTipPosition.Bottom
}
