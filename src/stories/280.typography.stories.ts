import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {ScUiDocumentTitleModule} from '../app/components/scui-document-title/scui-document-title';
import {ScUiTextBoxModule} from '../app/components/scui-text-box/scui-text-box';

storiesOf('Typography', module)
.addDecorator(
  moduleMetadata({
    imports: [ScUiDocumentTitleModule,ScUiTextBoxModule, RouterTestingModule]
  }))
  .add('Text box', () => ({
    template: `
      <scui-text-box>
      </scui-text-box>
    `
  }))
  .add('Document title', () => ({
    template: `
      <scui-document-header>
      </scui-document-header>
    `
  }))
  .add('placeholder', () => ({
    template: `<div>Placeholder</div>`
  }));
