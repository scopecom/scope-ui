import { ScUiMenuItem } from '../interfaces';

export const AppMenu: ScUiMenuItem[] = [
  {
    name: 'Projects',
    route: '/projects',
    iconClass: 'icon-text'
  },
  {
    name: 'Start',
    route: '/start',
    iconClass: 'icon-blog'
  },
  {
    name: 'Start',
    route: '/discover',
    iconClass: 'icon-pen-2'
  },
  {
    name: 'Projects',
    route: '/curate',
    iconClass: 'icon-mail'
  }
];

export const AppMenuLogo: ScUiMenuItem = {
  name: 'Scope',
  route: '/',
  iconClass: 'icon-scope-logo-glyph'
};

export const AppMenuFooter: ScUiMenuItem[] = [
  {
    name: 'Discover',
    route: '/discover',
    iconClass: 'icon-stack'
  },
  {
    name: 'Curate',
    route: '/curate',
    iconClass: 'icon-square-simple-up'
  }
];
