import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ScUiMenuItem } from '../../interfaces';

@Component({
  selector: 'scui-nav',
  template: `
    <aside class="scui-nav">
      <header class="nav-header" *ngIf="logo">
        <a [routerLink]="[logo.route]" [ngClass]="logo.cssClass">
          <span class="icon icon-32" [ngClass]="logo.iconClass" ></span>
        </a>
      </header>
      <nav class="nav-items">
        <a class="nav-item" *ngFor="let menuItem of menuItems" [routerLink]="[menuItem.route]">
          <span class="icon icon-32" [ngClass]="menuItem.iconClass" ></span>
        </a>
      </nav>
    </aside>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiNavComponent implements OnInit {
  @Input() menuItems: ScUiMenuItem[];
  @Input() logo: ScUiMenuItem;

  constructor() {
  }

  ngOnInit() {
  }

}
