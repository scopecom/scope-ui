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
    iconClass: 'icon-scope-assets'
  },
  {
    name: 'Projects',
    route: '/projects',
    iconClass: 'icon-scope-projects-2'
  },

];

export const WizardMenu: ScUiMenuItem[] = [
  {
    name: 'Layout view',
    route: 'layout'
  },
  {
    name: 'Output properties',
    route: 'output'
  },
  {
    name: 'publish',
    route: 'publish'
  },
  {
    name: 'Overview',
    route: 'overview'
  }
];

export const AppMenuLogo: ScUiMenuItem = {
  name: 'Scope',
  route: '/start',
  iconClass: 'icon-scope-home'
};

export const AppMenuFooter: ScUiMenuItem[] = [
  {
    name: 'Discover',
    route: '/discover',
    iconClass: 'icon-settings-gear-glyph-2'
  },
  {
    name: 'Curate',
    route: '/curate',
    iconClass: 'icon-door'
  }
];
