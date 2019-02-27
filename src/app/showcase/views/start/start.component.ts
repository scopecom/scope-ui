import { Component, OnInit } from '@angular/core';
import { ScUiMenuItem } from '../../../interfaces';
import { AppMenu } from '../../../constants/app.menu';

@Component({
  selector: 'scui-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  logo: ScUiMenuItem = {
    name: 'Scope',
    route: '/',
    iconClass: 'icon-scope-logo-glyph'
  };

  menuItems = AppMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
