import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ScUiDrawerComponent, ScUiDrawerNavComponent } from '../app/components/scui-drawer/scui-drawer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SubmenuStub1, SubmenuStub2 } from '../app/constants/submenu';
import { DragulaModule } from 'ng2-dragula';

storiesOf('Drawers', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule, DragulaModule.forRoot()],
      declarations: [ScUiDrawerComponent, ScUiDrawerNavComponent]
    })
  )
  .add('Default open', () => ({
    template: `
      <scui-drawer [drawerOpen]="drawerOpen">
        <section class="scui-submenu">
          <header class="submenu-header">
            <h1 class="submenu-title">Projects</h1>
          </header>
          <hr class="submenu-divider">
          <scui-drawer-nav [subMenuItems]="submenu" title="MY PROJECTS"></scui-drawer-nav>
          <hr class="submenu-divider">
          <scui-drawer-nav [subMenuItems]="submenu2" title="COMPANY PROJECTS"></scui-drawer-nav>
          <hr class="submenu-divider">
        </section>
      </scui-drawer>
    `,
    props: {
      drawerOpen: true,
      submenu: SubmenuStub1,
      submenu2: SubmenuStub2
    },
  }))
  .add('Default closed', () => ({
    template: `
      <scui-drawer [drawerOpen]="drawerOpen">
        <section class="scui-submenu">
          <header class="submenu-header">
            <h1 class="submenu-title">Projects</h1>
          </header>
          <hr class="submenu-divider">
          <scui-drawer-nav [subMenuItems]="submenu" title="MY PROJECTS"></scui-drawer-nav>
          <hr class="submenu-divider">
          <scui-drawer-nav [subMenuItems]="submenu2" title="COMPANY PROJECTS"></scui-drawer-nav>
          <hr class="submenu-divider">
        </section>
      </scui-drawer>`,
    props: {
      drawerOpen: false,
      submenu: SubmenuStub1,
      submenu2: SubmenuStub2
    },
  }))
  .add('Collapsible', () => ({
    template: `
          <scui-drawer [collapse]="collapse" [drawerOpen]="drawerOpen">
            <section class="scui-submenu">
              <header class="submenu-header">
                <h1 class="submenu-title">Projects</h1>
              </header>
              <hr class="submenu-divider">
              <scui-drawer-nav [subMenuItems]="submenu" title="MY PROJECTS"></scui-drawer-nav>
              <hr class="submenu-divider">
              <scui-drawer-nav [subMenuItems]="submenu2" title="COMPANY PROJECTS"></scui-drawer-nav>
              <hr class="submenu-divider">
            </section>
          </scui-drawer>`,
    props: {
      drawerOpen: false,
      collapse: true,
      submenu: SubmenuStub1,
      submenu2: SubmenuStub2
    },
  }));
