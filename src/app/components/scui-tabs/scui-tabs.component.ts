import { AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren, ViewEncapsulation } from '@angular/core';
import { ScUiTabs } from '../../interfaces';

@Component({
  selector: 'scui-tabs',
  template: `
    <section class="scui-tabs">
      <div class="tabs" #tabContainer>
        <div *ngFor="let tab of tabs, let i = index"
             [ngClass]="{'active-tab': i === activeTab, disabled:tab.disabled}"
             (click)="setActiveTab(i, tabItem, tabContainer)"
             #tabItem
             class="tab">{{ tab.title }}
        </div>
        <div class="border-wrap">
          <div [ngStyle]="{left: (offsetLeft || 0) + 'px', width: (offsetWidth) + 'px' }"
               class="border-bottom">
          </div>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScuiTabsComponent implements OnInit, AfterViewInit {
  activeTab: number;
  offsetLeft: number;
  offsetWidth: number;

  @ViewChildren('tabItem') tabItems: QueryList<HTMLDivElement>;
  @Input() tabs: ScUiTabs[];
  @Input() disabled: boolean;

  constructor() {
  }

  ngOnInit() {
    this.setActiveTab(0);
  }

  ngAfterViewInit() {
    this.setActiveTab(0, this.tabItems.first);
  }

  setActiveTab(key, tab?: HTMLDivElement, tabContainer?: HTMLDivElement) {
    console.log(888);
    this.activeTab = key;
    if (tab) {
      this.offsetLeft = tabContainer ? tab.offsetLeft - tabContainer.offsetLeft : 0;
      this.offsetWidth = tab.offsetWidth;
    }
  }
}
