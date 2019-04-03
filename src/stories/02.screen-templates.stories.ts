import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ScUiNavComponent } from '../app/components/scui-nav/scui-nav.component';
import { ScUiArticleComponent } from '../app/components/scui-article/scui-article.component';
import { ScuiTabsComponent } from '../app/components/scui-tabs/scui-tabs.component';
import { ScUiDrawerComponent } from '../app/components/scui-drawer/scui-drawer.component';
import { ScUiCardComponent } from '../app/components/scui-card/scui-card.component';
import { StartComponent } from '../app/showcase/views/start/start.component';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../app/constants/app.menu';
import { ArticleListStub } from '../app/constants/article.list';
import { SubmenuStub1, SubmenuStub2 } from '../app/constants/submenu';

storiesOf('Screen Templates', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ScUiNavComponent, ScUiArticleComponent, ScuiTabsComponent, ScUiDrawerComponent, ScUiCardComponent, StartComponent]
    })
  )
  .add('Start page', () => ({
    template: `
      <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
      <scui-start></scui-start>
    `,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter,
    }
  }))
  .add('Default', () => ({
    template: `
      <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
      <scui-drawer [drawerOpen]="drawerOpen">
        <section class="scui-submenu">
          <header class="submenu-header">
            <h1 class="submenu-title">Projects</h1>
          </header>
          <hr class="submenu-divider">
          <scui-drawer-nav [subMenuItems]="submenu" title="MY PROJECTS"></scui-drawer-nav>
          <hr class="submenu-divider">
          <scui-drawer-nav [subMenuItems]="submenu" title="COMPANY PROJECTS"></scui-drawer-nav>
          <hr class="submenu-divider">
        </section>
      </scui-drawer>
    `,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter,
      drawerOpen: true,
      submenu: SubmenuStub1,
      submenu2: SubmenuStub2
    }
  }))
  .add('Drawer', () => ({
    template: `
    <scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>
    <div class="scui-main-container">
      <scui-drawer [drawerOpen]="true">
        <section class="scui-submenu">
          <header class="submenu-header">
            <h1 class="submenu-title">Projects</h1>
          </header>
          <hr class="submenu-divider">
          <scui-drawer-nav [subMenuItems]="submenu" title="MY PROJECTS"></scui-drawer-nav>
          <hr class="submenu-divider">
          <scui-drawer-nav [subMenuItems]="submenu" title="COMPANY PROJECTS"></scui-drawer-nav>
          <hr class="submenu-divider">
        </section>
      </scui-drawer>
      <div class="scui-content">
        <div class="scui-container">
          <div class="scui-content">
            <div class="scui-row">
              <scui-article *ngFor="let article of articles" [article]="article" ></scui-article>
            </div>
          </div>
        </div>
      </div>
      <scui-drawer [collapse]="false" [drawerPosition]="'right'" [drawerOpen]="true" cssClass="article-menu">
        <div class="import-progress"></div>
        <section class="article-import">
          <header class="article-import-header">
            <div class="tab-nav">
              <a class="tab">TAB 1</a>
              <a class="tab">TAB 2</a>
            </div>
          </header>
          <div class="article-import-content">
            <textarea rows="10" placeholder="Your Comment..."></textarea>
          </div>
          <div class="article-import-actions">
            <button>Cancel</button>
            <button>Import</button>
          </div>
        </section>
      </scui-drawer>
    </div>
    `,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter,
      drawerOpen: true,
      articles: ArticleListStub,
      submenu: SubmenuStub1,
      submenu2: SubmenuStub2
    }
  }));
