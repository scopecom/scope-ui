import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ScUiButtonsModule} from '../app/components/scui-buttons/scui-buttons.module';


storiesOf('Buttons', module)
  .addDecorator(moduleMetadata({
    imports: [ScUiButtonsModule]
  }))
  .add('Button large default', () => ({
    template: `<div style="padding:40px; background:white;max-width: 400px;">
              <scui-large-button [cssClass]="cssClass" [label]="label"></scui-large-button>
              </div>`,
    props: {
      cssClass: 'btn-large-default',
      label: 'CANCEL'
    }
  })).add('Button large blue', () => ({
  template: `<div style="padding:40px; background:white;max-width: 400px;">
              <scui-large-button [cssClass]="cssClass" [label]="label"></scui-large-button>
              </div>`,
  props: {
    cssClass: 'btn-large-blue',
    label: 'CANCEL'
  }
})).add('Button large disabled', () => ({
  template: `<div style="padding:40px; background:white;max-width: 400px;">
              <scui-large-button [cssClass]="cssClass" [label]="label"></scui-large-button>
              </div>`,
  props: {
    cssClass: 'btn-large-disabled',
    label: 'CANCEL'
  }
})).add('Button large icon', () => ({
  template: `<div style="padding:40px; background:white;max-width: 400px;">
              <scui-large-button-icon  [icon]="icon" [cssClass]="cssClass" [label]="label"></scui-large-button-icon>
              </div>`,
  props: {
    cssClass: 'btn-large-icon-blue',
    label: 'SAVE',
    icon: 'icon-arrow-right'
  }
})).add('Button large icon disabled', () => ({
  template: `<div style="padding:40px; background:white;max-width: 400px;">
              <scui-large-button-icon  [icon]="icon" [cssClass]="cssClass" [label]="label"></scui-large-button-icon>
              </div>`,
  props: {
    cssClass: 'btn-large-icon-disabled',
    label: 'SAVE',
    icon: 'icon-arrow-right'
  }
}));


