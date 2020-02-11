import {moduleMetadata, storiesOf} from '@storybook/angular';
import {Tabs} from '../app/constants/tabs';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {RouterTestingModule} from '@angular/router/testing';
import {DragulaModule} from 'ng2-dragula';
import {ScUiTabsComponent} from '../app/components/scui-tabs/scui-tabs.component';
import {ScUiDrawerComponent} from '../app/components/scui-drawer/scui-drawer.component';

storiesOf('Tabs', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule, DragulaModule.forRoot()],
      declarations: [ScUiTabsComponent, ScUiDrawerComponent]
    })
  )
  .add('Tabs', () => ({
    template: `<div style="background: white; margin:20px;">
              <scui-tabs [tabs]="tabs" (tabSelect)="tabEvt($event)"></scui-tabs>
            </div>`,
    props: {
      tabs: Tabs,
      tabEvt: action('Tab Select')
    }
  }))
  .add('Tabs drawer', () => ({
    template: `<div style="background: white; margin:20px;">
              <scui-tabs [cssClass]="cssClass" [tabs]="tabs" (tabSelect)="tabEvt($event)"></scui-tabs>
            </div>`,
    props: {
      tabs: Tabs,
      cssClass: 'tabs-drawer',
      tabEvt: action('Tab Select')
    }
  }))
  .add('Tabs Programatically change', () => ({
    template: `<div style="background: white; margin:20px;">
                    <scui-tabs [tabs]="tabs" [activeTabIndex]="activeTabIndex" (tabSelect)="tabEvt($event)"></scui-tabs>
                    <button (click)="activeTabIndex = 1">1</button>
                    <button (click)="activeTabIndex = 2">2</button>
                </div>`,
    props: {
      tabs: Tabs,
      activeTabIndex: 0,
      tabEvt: action('Tab Select')
    }
  }));
