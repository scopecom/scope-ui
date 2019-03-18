import { Component, OnInit } from '@angular/core';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../../../constants/app.menu';

@Component({
  selector: 'scui-main-layout',
  template: `
    <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class MainLayoutComponent implements OnInit {
  logo = AppMenuLogo;
  footer = AppMenuFooter;
  menuItems = AppMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
