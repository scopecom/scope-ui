import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import { ScUiImageListModule } from '../app/components/scui-imagelist/scui-imagelist.module';

storiesOf('Image List', module)
.addDecorator(
  moduleMetadata({
    imports: [ScUiImageListModule, RouterTestingModule]
  })
)
.add('Image article list', () => ({
  template: `
    <scui-image-box>
    </scui-image-box>
  `
}))
  .add('placeholder', () => ({
    template: `<div>Placeholder</div>`
  }));
