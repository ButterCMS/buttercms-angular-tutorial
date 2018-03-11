import { NavigationEnd } from '@angular/router';

export interface TopnavItem {
    icon: string;
    svg?: boolean;
    textContent: string;
    click: () => void;
    active?: boolean;
    activeCondition?: string | ((event: NavigationEnd) => boolean);
}
