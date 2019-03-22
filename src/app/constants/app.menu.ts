import { ScUiMenuItem } from '../interfaces';

export const AppMenu: ScUiMenuItem[] = [
  {
    name: 'Projects',
    route: '/test',
    iconClass: 'icon-magnifier'
  },
  {
    name: 'Start',
    route: '/library',
    iconClass: 'icon-book-39'
  },
  {
    name: 'Start',
    route: '/test',
    iconClass: 'icon-app-store'
  },
  {
    name: 'Projects',
    route: '/test',
    iconClass: 'icon-send'
  },
  {
    name: 'Projects',
    route: '/test',
    iconClass: 'icon-calendar'
  },
  {
    name: 'Projects',
    route: '/test',
    iconClass: 'icon-pin-2'
  }
];

export const AppMenuLogo: ScUiMenuItem = {
  name: 'Scope',
  route: '/start',
  iconClass: 'icon-home'
};

export const AppMenuFooter: ScUiMenuItem[] = [
  {
    name: 'Discover',
    route: '/discover',
    iconClass: 'icon-settings-gear'
  },
  {
    name: 'Curate',
    route: '/curate',
    iconClass: 'icon-circle-08'
  }
];
