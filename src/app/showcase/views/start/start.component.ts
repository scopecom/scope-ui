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

  constructor() {
  }

  ngOnInit() {
  }

}
