import { IMenuItemParms } from '@utilities/interfaces/layout.interface';
import { ToolTipPosition } from 'src/app/modules/shared/components/tooltip/tooltip.component';

export const MENU_LIST: IMenuItemParms[] = [
    {
        path: 'home',
        icon: 'dashboard',
        i18n: 'Menu.Home'
    },
    // {
    //     path: 'team',
    //     icon: 'account1',
    //     i18n: 'Menu.Team'
    // }
];

export const MENU_SET: IMenuItemParms = {
    path: 'setting',
    icon: 'setting',
    i18n: 'Menu.Setting',
    tooltip: ToolTipPosition.Top
};

export const MENU_LOGOUT: IMenuItemParms = {
    path: 'logout',
    icon: 'logOut',
    i18n: 'Menu.Logout',
    tooltip: ToolTipPosition.Top
}
