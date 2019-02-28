import { moduleMetadata, storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ScUiNavComponent } from '../app/components/scui-nav/scui-nav.component';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../app/constants/app.menu';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

storiesOf('ScUi Navigation', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, RouterTestingModule],
      declarations: [ScUiNavComponent]
    })
  )
  .add('full nav', () => ({
    template: `<scui-nav [logo]="logo" [menuItems]="menuItems" [footer]="footer"></scui-nav>`,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
      footer: AppMenuFooter
    },
  }))
  .add('without footer', () => ({
    template: `<scui-nav [logo]="logo" [menuItems]="menuItems"></scui-nav>`,
    props: {
      menuItems: AppMenu,
      logo: AppMenuLogo,
    },
  }));
