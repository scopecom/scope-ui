import {
  AfterViewInit,
  Component, ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewEncapsulation
} from '@angular/core';
import {ScUiTabs} from '../../interfaces';

@Component({
  selector: 'scui-tabs',
  template: `
    <section class="scui-tabs {{ cssClass }}">
      <div class="tabs" #tabContainer>
        <div *ngFor="let tab of tabs, let i = index"
             [ngClass]="{'active-tab': i === activeTabIndex, disabled:tab.disabled}"
             (click)="setActiveTab(i, tabItem, tabContainer)"
             #tabItem
             class="tab">{{tab.title}}
        </div>
        <div class="border-wrap">
          <div [ngStyle]="{left: (offsetLeft || 0) + 'px', width: (offsetWidth) + 'px' }"
               class="border-top">
          </div>
        </div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiTabsComponent implements AfterViewInit {
  offsetLeft = 0;
  offsetWidth = 0;

  @ViewChildren('tabItem') tabItems: QueryList<ElementRef>;
  @ViewChild('tabContainer') tabContainer: ElementRef;
  @Input() tabs: ScUiTabs[];
  @Input() activeTabIndex = 0;
  @Input() cssClass: string;

  @Output() tabSelect = new EventEmitter<number>();

  constructor() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setActiveTab(this.activeTabIndex, this.tabItems.first.nativeElement, this.tabContainer.nativeElement);
    });
  }

  setActiveTab(key, tab?: HTMLDivElement, tabContainer?: HTMLDivElement) {
    this.activeTabIndex = key;
    if (tab) {
      this.offsetLeft = tabContainer ? tab.offsetLeft - tabContainer.offsetLeft : 0;
      this.offsetWidth = tab.offsetWidth;
    }

    this.tabSelect.emit(key);
  }
}
