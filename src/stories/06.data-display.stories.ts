import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ScUiScopeLogoComponent } from '../app/components/scui-scope-logo/scui-scope-logo.component';

storiesOf('Data Display', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ScUiScopeLogoComponent]
    })
  ).add('Placeholder Component', () => ({
  template: `<scui-scope-logo></scui-scope-logo>`,
}));

