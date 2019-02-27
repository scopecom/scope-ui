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
    iconUrl: 'https://storage.googleapis.com/static-imgs/scope-ui/scope-white.svg'
  };

  menuItems = AppMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
