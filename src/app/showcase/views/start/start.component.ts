import { Component, OnInit } from '@angular/core';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../../../constants/app.menu';

@Component({
  selector: 'scui-start',
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {

  logo = AppMenuLogo;
  footer = AppMenuFooter;
  menuItems = AppMenu;
  public buttons = [
    {
      icon: 'icon-magnifier',
      name: 'Search',
      description: 'Find your content',
      url: '',
    }, {
      icon: 'icon-send',
      name: 'Publish',
      description: 'Deliver to your audience',
      url: '',
    }, {
      icon: 'icon-puzzle-10',
      name: 'Connectors',
      description: 'Connect to the matrix',
      url: '',
    }, {
      icon: 'icon-book-39',
      name: 'Library',
      description: 'Refine your data',
      url: '',
    }, {
      icon: 'icon-calendar',
      name: 'Media',
      description: 'Schedule your output',
      url: '',
    }, {
      icon: 'icon-circle-08',
      name: 'User Settings',
      description: 'Personal Information',
      url: '',
    }, {
      icon: 'icon-app-store',
      name: 'Projects',
      description: 'Create your output',
      url: '',
    }, {
      icon: 'icon-pin-2',
      name: 'Analytics',
      description: 'Measure your performance',
      url: '',
    }, {
      icon: 'icon-settings-gear',
      name: 'Account',
      description: 'Setup and configuration',
      url: '',
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
