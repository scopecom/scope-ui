import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from '../app/components/button/button.module';

storiesOf('Navigation', module)
  .add('test', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));
