import { IMenuItemParms } from 'src/app/interfaces/menu.interface';
import { ToolTipPosition } from 'src/app/modules/shared/components/tooltip/tooltip.component';

export const MENU_LIST: IMenuItemParms[] = [
    {
        path: 'home',
        icon: 'dashboard',
        i18n: 'Menu.Home'
    },
    {
        path: 'team',
        icon: 'account1',
        i18n: '團隊成員'
    }
];

export const MENU_SET: IMenuItemParms = {
    path: 'setting',
    icon: 'setting',
    i18n: '設定',
    tooltip: ToolTipPosition.Top
};
