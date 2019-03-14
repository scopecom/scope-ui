import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ScUiMenuItem } from '../../interfaces';

@Component({
  selector: 'scui-nav',
  template: `
    <aside class="scui-nav">
      <header class="nav-header" *ngIf="logo">
        <a [routerLink]="[logo.route]" [ngClass]="logo.cssClass">
          <span class="icon" [ngClass]="logo.iconClass"></span>
        </a>
      </header>
      <nav class="nav-items">
        <a class="nav-item"
           *ngFor="let menuItem of menuItems"
           scuiBgHover="#2A00A0"
           [routerLink]="[menuItem.route]"
           [routerLinkActive]="activeClass">
          <span class="icon" [ngClass]="menuItem.iconClass"></span>
        </a>
      </nav>
      <footer class="nav-footer" *ngIf="footer">
        <a class="nav-item" *ngFor="let menuItem of footer" [routerLink]="[menuItem.route]" [routerLinkActive]="activeClass">
          <span class="icon" [ngClass]="menuItem.iconClass"></span>
        </a>
      </footer>
    </aside>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiNavComponent implements OnInit {
  @Input() menuItems: ScUiMenuItem[];
  @Input() logo: ScUiMenuItem;
  @Input() footer: ScUiMenuItem[];
  @Input() activeClass = 'active-nav';

  constructor() {
  }

  ngOnInit() {
  }

}
