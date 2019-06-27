import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ScUiFormControlsModule} from '../app/components/form-controls/form-controls.module';
import {ScUiModalContainerModule} from '../app/components/scui-modal-container/scui-modal-container';

storiesOf('Containers', module)
  .addDecorator(moduleMetadata({
    imports: [
      ScUiFormControlsModule,
      ScUiModalContainerModule
    ]
  }))
  .add('Form Container default', () => ({
    template: `<div style="margin: 20px;padding:20px;width:800px;">
                  <scui-form-container></scui-form-container>
               </div>`,
  }))
  .add('Form Container active', () => ({
    template: `<div style="margin: 20px;padding:20px;width:800px;">
                  <scui-form-container [cssClass]="cssClass"></scui-form-container>
               </div>`,
    props: {
      cssClass: 'form-active'
    }
  }))
  .add('Form Container error', () => ({
    template: `<div style="margin: 20px;padding:20px;width:800px;">
                  <scui-form-container [cssClass]="cssClass"></scui-form-container>
               </div>`,
    props: {
      cssClass: 'form-error'
    }
  }))
  .add('Modal Container', () => ({
    template: `<div style="margin: 20px;padding:20px;width:800px;">
                  <scui-modal-container></scui-modal-container>
               </div>`,
  }));
