import { moduleMetadata, storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ScUiNavComponent } from '../app/components/scui-nav/scui-nav.component';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../app/constants/app.menu';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ScUiDrawerComponent } from '../app/components/scui-drawer/scui-drawer.component';

storiesOf('ScUi Menu', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ScUiNavComponent, ScUiDrawerComponent]
    })
  )
  .add('scope menu default', () => ({
    template: `
      <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
        <div class="scui-container">
          <scui-drawer [drawerOpen]="drawerOpen">
            <h1 class="section-title">Projects</h1>
            <div class="submenu">
              <h4 class="submenu-title">All projects</h4>
              <ul class="submenu-items">
                <li><span class="icon icon-time"></span> Ki, Ai (All Countries)</li>
                <li><span class="icon icon-time"></span> Newsletter</li>
                <li><span class="icon icon-time"></span> Marketing</li>
              </ul>
            </div>

          </scui-drawer>
          <div class="scui-content">

          </div>
        </div>`,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter,
      drawerOpen: true
    },
  }))
  .add('scope menu collapsable', () => ({
    template: `
      <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
        <div class="scui-container">
          <scui-drawer [drawerOpen]="drawerOpen" [collapse]="collapse">
            <h1 class="section-title">Projects (collapse)</h1>
            <div class="submenu">
              <h4 class="submenu-title">All projects</h4>
              <ul class="submenu-items">
                <li><span class="icon icon-time"></span> Ki, Ai (All Countries)</li>
                <li><span class="icon icon-time"></span> Newsletter</li>
                <li><span class="icon icon-time"></span> Marketing</li>
              </ul>
            </div>

          </scui-drawer>
          <div class="scui-content">

          </div>
        </div>`,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter,
      drawerOpen: true,
      collapse: true
    },
  }));
