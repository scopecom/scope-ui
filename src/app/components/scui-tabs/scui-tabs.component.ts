import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tabs } from '../../constants/tabs';

@Component({
  selector: 'scui-tabs',
  template: `
    <section class="scui-tabs">
      <div class="tabs">
        <div *ngFor="let tab of tabs, let i = index"
             [ngClass]="{'active-tab': i === activeTab}"
             (click)="setActiveTab(i)"
             class="tab">{{ tab.title }}
        </div>
        <div class="border-wrap">
          <div [ngStyle]="{left: tabs[activeTab].underlineLeft, width:tabs[activeTab].underlineWidth }"
               class="border-bottom">
          </div>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScuiTabsComponent implements OnInit {
  activeTab: number;
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
