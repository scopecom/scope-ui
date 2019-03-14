import { moduleMetadata, storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { ScUiNavComponent } from '../app/components/scui-nav/scui-nav.component';
import { ScUiDrawerComponent } from '../app/components/scui-drawer/scui-drawer.component';
import { StartComponent } from '../app/showcase/views/start/start.component';
import { ScUiCardComponent } from '../app/components/scui-card/scui-card.component';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../app/constants/app.menu';

storiesOf('Template', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ScUiNavComponent, ScUiDrawerComponent, ScUiCardComponent, StartComponent]
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
  }));
