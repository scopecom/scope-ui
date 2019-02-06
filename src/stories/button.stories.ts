import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button/button.module';

storiesOf('Scope Button', module)
  .add('with some emoji', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }))
  .add('with some action', () => ({
    component: ButtonComponent,
    props: {
      text: 'Hi I\'m a button',
      onClick: action('clicked'),
    },
  }))
  .add('disabled', () => ({
    component: ButtonComponent,
    props: {
      text: ':(',
      disabled: true
    },
  }));
