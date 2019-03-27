import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tabs } from '../../constants/tabs';

@Component({
  selector: 'scui-tabs',
  template: `
    <section class="scui-tabs">
      <div class="tabs">
        <div *ngFor="let key of objectKeys(tabs)"
             [ngClass]="{'active-tab': key == activeTab}"
             (click)="setActiveTab(key)"
             class="tab">{{ tabs[key].title }}
        </div>
        <div class="border-wrap">
          <div [ngStyle]="{left: activeTab*75 + 'px' }" class="border-bottom"></div>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScuiTabsComponent implements OnInit {

  objectKeys = Object.keys;
  activeTab = Number;
  tabs = Tabs;

  constructor() {
  }

  ngOnInit() {
    this.setActiveTab(0);
  }

  setActiveTab(key) {
    this.activeTab = key;
  }

}
