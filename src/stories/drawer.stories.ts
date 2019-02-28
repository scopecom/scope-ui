import { moduleMetadata, storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { ScUiDrawerComponent } from '../app/components/scui-drawer/scui-drawer.component';

storiesOf('ScUi Drawer', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ScUiDrawerComponent]
    })
  )
  .add('default open', () => ({
    template: `<scui-drawer [drawerOpen]="drawerOpen">
    <h1 class="section-title">Projects</h1>
    <div class="submenu">
      <h4 class="submenu-title">All projects</h4>
      <ul class="submenu-items">
        <li><span class="icon icon-time"></span> Ki, Ai (All Countries)</li>
        <li><span class="icon icon-time"></span> Newsletter</li>
        <li><span class="icon icon-time"></span> Marketing</li>
      </ul>
    </div>
  </scui-drawer>`,
    props: {
      drawerOpen: true
    },
  }))
  .add('default closed', () => ({
    template: `<scui-drawer [drawerOpen]="drawerOpen">
    <h1 class="section-title">Projects</h1>
    <div class="submenu">
      <h4 class="submenu-title">All projects</h4>
      <ul class="submenu-items">
        <li><span class="icon icon-time"></span> Ki, Ai (All Countries)</li>
        <li><span class="icon icon-time"></span> Newsletter</li>
        <li><span class="icon icon-time"></span> Marketing</li>
      </ul>
    </div>

  </scui-drawer>`,
    props: {
      drawerOpen: false
    },
  }))
  .add('collapsable', () => ({
    template: `<scui-drawer [drawerOpen]="drawerOpen" [collapse]="collapse">
    <h1 class="section-title">Projects</h1>
    <div class="submenu">
      <h4 class="submenu-title">All projects</h4>
      <ul class="submenu-items">
        <li><span class="icon icon-time"></span> Ki, Ai (All Countries)</li>
        <li><span class="icon icon-time"></span> Newsletter</li>
        <li><span class="icon icon-time"></span> Marketing</li>
      </ul>
    </div>

  </scui-drawer>`,
    props: {
      drawerOpen: false,
      collapse: true
    },
  }));
