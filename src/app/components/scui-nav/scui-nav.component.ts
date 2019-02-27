import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {ScUiMenuItem} from '../../interfaces';

@Component({
  selector: 'scui-nav',
  template: `
    <aside class="scui-nav">
      <header class="nav-header" *ngIf="logo">
        <a [routerLink]="[logo.route]" [ngClass]="logo.cssClass">
          <img [src]="logo.iconUrl" [alt]="logo.name"/>
        </a>
      </header>
      <nav class="nav-items">
        <a class="nav-item" *ngFor="let menuItem of menuItems" [routerLink]="[menuItem.route]">
          <img [src]="menuItem.iconUrl" [alt]="menuItem.name"/>
        </a>
      </nav>
    </aside>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScuiNavComponent implements OnInit {
  @Input() menuItems: ScUiMenuItem[];
  @Input() logo: ScUiMenuItem;

  constructor() {
  }

  ngOnInit() {
  }

}
