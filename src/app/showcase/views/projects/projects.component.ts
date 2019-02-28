import { Component, OnInit } from '@angular/core';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../../../constants/app.menu';

@Component({
  selector: 'scui-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {
  logo = AppMenuLogo;
  footer = AppMenuFooter;
  menuItems = AppMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
