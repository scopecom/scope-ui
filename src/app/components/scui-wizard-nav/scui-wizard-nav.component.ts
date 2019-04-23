import { Component, Input, OnInit } from '@angular/core';
import { ScUiMenuItem } from '../../interfaces';
import { Location } from '@angular/common';

@Component({
  selector: 'scui-wizard-nav',
  template: `
    <header class="scui-wizard-nav">
      <nav class="scui-wizard-back">
        <a (click)="goBack()">
          <span class="icon icon-arrow-left"></span>
          <span class="label">Austeller Update</span>
        </a>
      </nav>
      <nav class="scui-wizard">
        <ng-container *ngFor="let navItem of navItems; let i = index">
          <a class="scui-wizard-nav-item"
             (click)="setStep(i)"
             [ngClass]="{'active-step': activeStep >= i}"
             [routerLink]="[navItem.route]"
             [routerLinkActive]="activeClass">
            <div class="scui-wizard-nav-icon"></div>
            <div class="scui-wizard-nav-text">{{navItem.name}}</div>
          </a>
          <span [ngClass]="{'active-step': activeStep > i}" class="scui-wizard-nav-delimiter" *ngIf="i < (navItems.length - 1)"></span>
        </ng-container>
      </nav>
    </header>
  `,
  styles: []
})
export class ScUiWizardNavComponent implements OnInit {
  @Input() navItems: ScUiMenuItem[];
  @Input() activeClass = 'active-nav';

  activeStep = 0;

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }

  setStep(index: number) {
    this.activeStep = index;
  }
}
