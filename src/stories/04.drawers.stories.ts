import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ScUiDrawerComponent } from '../app/components/scui-drawer/scui-drawer.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SubmenuStub1, SubmenuStub2 } from '../app/constants/submenu';

storiesOf('Drawers', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ScUiDrawerComponent]
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
          </scui-drawer>`,
    props: {
      drawerOpen: false,
      collapse: true,
      submenu: SubmenuStub1,
      submenu2: SubmenuStub2
    },
  }));
