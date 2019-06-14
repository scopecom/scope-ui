import {moduleMetadata, storiesOf} from '@storybook/angular';
import {action} from '@storybook/addon-actions';
import {CommonModule} from '@angular/common';
import {ScUiCardComponent} from '../app/components/scui-card/scui-card.component';
import {ButtonListStub} from '../app/constants/button.list';
import {BgHoverDirective} from '../app/directives/bg-hover.module';
import {ScUiDrawerComponent, ScUiDrawerNavComponent} from '../app/components/scui-drawer/scui-drawer.component';
import {ScUiNavComponent} from '../app/components/scui-nav/scui-nav.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AppMenu, AppMenuFooter, AppMenuLogo} from '../app/constants/app.menu';
import {SubmenuStub1, SubmenuStub2} from '../app/constants/submenu';
import {ScUiTabsComponent} from '../app/components/scui-tabs/scui-tabs.component';
import {DragulaModule} from 'ng2-dragula';
import {MatMenuModule} from '@angular/material/menu';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';


storiesOf('Menus', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule, DragulaModule.forRoot(), MatMenuModule, NoopAnimationsModule],
      declarations: [ScUiCardComponent, ScUiTabsComponent, BgHoverDirective, ScUiDrawerComponent, ScUiNavComponent, ScUiDrawerNavComponent]
    })
  )
  .add('Card Default', () => ({
    template: `
      <scui-card [icon]="buttonList[0].icon"
         [description]="buttonList[0].description"
         [name]="buttonList[0].name">
      </scui-card>
    `,
    props: {
      buttonList: ButtonListStub,
    },
  }))
  .add('Card List', () => ({
    template: `
      <div class="scui-container">
        <div class="scui-content">
          <div class="scui-row cards-wrap">
            <scui-card *ngFor="let btn of buttonList"
              [icon]="btn.icon"
              [description]="btn.description"
              [name]="btn.name">
            </scui-card>
          </div>
        </div>
      </div>
    `,
    props: {
      buttonList: ButtonListStub,
    },
  }))
  .add('Menu Start', () => ({
    template: `
      <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
        <div class="scui-container">
<!--          <scui-drawer [collapse]="true" [drawerOpen]="true">
            <section class="scui-submenu">
              <header class="submenu-header">
                <h1 class="submenu-title">Projects</h1>
              </header>
              <div class="submenu-divider"></div>
              <scui-drawer-nav [subMenuItems]="submenu" title="MY PROJECTS"></scui-drawer-nav>
              <div class="submenu-divider"></div>
              <scui-drawer-nav [subMenuItems]="submenu2" title="COMPANY PROJECTS"></scui-drawer-nav>
              <div class="submenu-divider"></div>
            </section>
          </scui-drawer>
          <div class="scui-content">

          </div>-->
        </div>`,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter,
      submenu: SubmenuStub1,
      submenu2: SubmenuStub2,
      drawerOpen: true
    },
  }))
  .add('Logout submenu', () => ({
    template: `
          <div style="margin:20px;">
                  <mat-menu #appMenu="matMenu">
                    <div class="logout-item username" mat-menu-item>
                    <span>Peter Hogenkamp</span>
                    </div>
                    <div class="logout-item logout" mat-menu-item>
                    <span>Logout</span>
                    </div>
                  </mat-menu>
                  <button style="padding:5px;" [matMenuTriggerFor]="appMenu">
                    Toggle Logout submenu
                  </button>
          </div>
    `
  }))
  .add('Menu Default', () => ({
    template: `
      <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
        <div class="scui-container">
          <scui-drawer [collapse]="true" [drawerOpen]="true">
            <section class="scui-submenu">
              <header class="submenu-header">
                <h1 class="submenu-title">Projects</h1>
              </header>
              <div class="submenu-divider"></div>
              <scui-drawer-nav [subMenuItems]="submenu" title="MY PROJECTS"></scui-drawer-nav>
              <div class="submenu-divider"></div>
              <scui-drawer-nav [subMenuItems]="submenu2" title="COMPANY PROJECTS"></scui-drawer-nav>
              <div class="submenu-divider"></div>
            </section>
          </scui-drawer>
          <div class="scui-content">

          </div>
        </div>`,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter,
      submenu: SubmenuStub1,
      submenu2: SubmenuStub2,
      drawerOpen: true,
      collapse: true
    },
  }));
