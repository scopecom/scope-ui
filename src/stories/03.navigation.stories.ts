import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ScUiCardComponent } from '../app/components/scui-card/scui-card.component';
import { ButtonListStub } from '../app/constants/button.list';
import { BgHoverDirective } from '../app/directives/bg-hover.module';
import { ScUiDrawerComponent } from '../app/components/scui-drawer/scui-drawer.component';
import { ScUiNavComponent } from '../app/components/scui-nav/scui-nav.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../app/constants/app.menu';
import { SubmenuStub1, SubmenuStub2 } from '../app/constants/submenu';
import { ScuiTabsComponent } from '../app/components/scui-tabs/scui-tabs.component';

storiesOf('Navigation', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ScUiCardComponent, ScuiTabsComponent, BgHoverDirective, ScUiDrawerComponent, ScUiNavComponent]
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
  .add('Menu default', () => ({
    template: `
      <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
        <div class="scui-container">
          <scui-drawer [collapse]="true" [drawerOpen]="true">
            <section class="scui-submenu">
              <header class="submenu-header">
                <h1 class="submenu-title">Projects</h1>
              </header>
              <hr class="submenu-divider">
              <nav class="submenu-nav">
                <h2 class="submenu-nav-title color_01">MY PROJECTS ({{ submenu.length }})</h2>
                <ul class="submenu-nav-items">
                  <div class="nav-header-label">All</div>
                  <li (click)="activateClass(item)"
                      [ngClass]="{'active': item.active}"
                      *ngFor="let item of submenu"
                      class="submenu-nav-item">
                    <a routerLink="project/{{item.id}}">
                      <span class="icon icon1 icon-app-store"></span>
                      <span class="submenu-nav-label">{{item.name}}</span>
                      <span class="submenu-nav-actions">
                        <button class="icon-btn-empty"><span class="icon icon2 icon-c-delete"></span></button>
                        <button class="icon-btn-empty"><span class="icon icon2 icon-settings-gear"></span></button>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <hr class="submenu-divider">
              <nav class="submenu-nav">
                <h2 class="submenu-nav-title color_01">COMPANY PROJECTS ({{ submenu.length }})</h2>
                <ul class="submenu-nav-items">
                  <div class="nav-header-label">All</div>
                  <li (click)="activateClass(item)"
                      [ngClass]="{'active': item.active}"
                      *ngFor="let item of submenu2"
                      class="submenu-nav-item">
                    <a routerLink="project/{{item.id}}">
                      <span class="icon icon1 icon-app-store"></span>
                      <span class="submenu-nav-label">{{item.name}}</span>
                      <span class="submenu-nav-actions">
                        <button class="icon-btn-empty"><span class="icon icon2 icon-c-delete"></span></button>
                        <button class="icon-btn-empty"><span class="icon icon2 icon-settings-gear"></span></button>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <hr class="submenu-divider">
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
      drawerOpen: true
    },
  }))
  .add('Menu collapsable', () => ({
    template: `
      <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
        <div class="scui-container">
          <scui-drawer [collapse]="true" [drawerOpen]="true">
            <section class="scui-submenu">
              <header class="submenu-header">
                <h1 class="submenu-title">Projects</h1>
              </header>
              <hr class="submenu-divider">
              <nav class="submenu-nav">
                <h2 class="submenu-nav-title color_01">MY PROJECTS ({{ submenu.length }})</h2>
                <ul class="submenu-nav-items">
                  <div class="nav-header-label">All</div>
                  <li (click)="activateClass(item)"
                      [ngClass]="{'active': item.active}"
                      *ngFor="let item of submenu"
                      class="submenu-nav-item">
                    <a routerLink="project/{{item.id}}">
                      <span class="icon icon1 icon-app-store"></span>
                      <span class="submenu-nav-label">{{item.name}}</span>
                      <span class="submenu-nav-actions">
                        <button class="icon-btn-empty"><span class="icon icon2 icon-c-delete"></span></button>
                        <button class="icon-btn-empty"><span class="icon icon2 icon-settings-gear"></span></button>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <hr class="submenu-divider">
              <nav class="submenu-nav">
                <h2 class="submenu-nav-title color_01">COMPANY PROJECTS ({{ submenu.length }})</h2>
                <ul class="submenu-nav-items">
                  <div class="nav-header-label">All</div>
                  <li (click)="activateClass(item)"
                      [ngClass]="{'active': item.active}"
                      *ngFor="let item of submenu2"
                      class="submenu-nav-item">
                    <a routerLink="project/{{item.id}}">
                      <span class="icon icon1 icon-app-store"></span>
                      <span class="submenu-nav-label">{{item.name}}</span>
                      <span class="submenu-nav-actions">
                        <button class="icon-btn-empty"><span class="icon icon2 icon-c-delete"></span></button>
                        <button class="icon-btn-empty"><span class="icon icon2 icon-settings-gear"></span></button>
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
              <hr class="submenu-divider">
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
  }))
  .add('Navigation', () => ({
    template: `<scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>`,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter
    },
  }))
  .add('Navigation without footer', () => ({
    template: `<scui-nav [logo]="logo" [menuItems]="menuItems"></scui-nav>`,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
    },
  }))
  .add('Tabs', () => ({
    template: `<scui-tabs></scui-tabs>`
  }));
