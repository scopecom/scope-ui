import { Component, OnInit } from '@angular/core';
import { ScUiMenuItem } from '../interfaces';

@Component({
  selector: 'scui-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent implements OnInit {
  logo: ScUiMenuItem = {
    name: 'Scope',
    route: '/',
    iconUrl: 'https://storage.googleapis.com/static-imgs/scope-ui/scope-white.svg'
  };

  menuItems: ScUiMenuItem[] = [
    {
      name: 'Discover',
      route: '/discover',
      iconUrl: 'https://storage.googleapis.com/static-imgs/scope-ui/discover-white.svg'
    },
    {
      name: 'Curate',
      route: '/curate',
      iconUrl: 'https://storage.googleapis.com/static-imgs/scope-ui/curate-white.svg'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
