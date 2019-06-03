import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ScUiFormControlsModule} from '../app/components/form-controls/form-controls.module';

storiesOf('Containers', module)
  .addDecorator(moduleMetadata({
    imports: [
      ScUiFormControlsModule,
    ]
  }))
  .add('Form Container default', () => ({
    template: `<div style="margin: 20px;padding:20px;width:800px; background:white;">
                  <scui-form-container></scui-form-container>
               </div>`,
  }))
  .add('Form Container active', () => ({
    template: `<div style="margin: 20px;padding:20px;width:800px;background:white;">
                  <scui-form-container [cssClass]="cssClass"></scui-form-container>
               </div>`,
    props: {
      cssClass: 'form-active'
    }
  }))
  .add('Form Container error', () => ({
    template: `<div style="margin: 20px;padding:20px;width:800px;background:white;">
                  <scui-form-container [cssClass]="cssClass"></scui-form-container>
               </div>`,
    props: {
      cssClass: 'form-error'
    }
  }));
