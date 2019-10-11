import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import { ScUiImageModule } from '../app/components/scui-image/scui-image.module';

storiesOf('Image', module)
  .addDecorator(
    moduleMetadata({
      imports: [ScUiImageModule, RouterTestingModule]
    })
  )
  .add('Image full width', () => ({
    template: `
      <scui-image>
      </scui-image>
    `
  }))
  .add('placeholder', () => ({
    template: `<div>Placeholder</div>`
  }));
