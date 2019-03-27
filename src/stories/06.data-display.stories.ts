import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from '../app/components/button/button.module';

storiesOf('Data Display/Table', module)
  .add('test', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

storiesOf('Data Display/Grids/Warning, Error & Confirmation', module)
  .add('test', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

storiesOf('Data Display/Grids/Modality', module)
  .add('test', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

storiesOf('Data Display/Grids/Style', module)
  .add('test', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

storiesOf('Data Display/Color', module)
  .add('test', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

storiesOf('Data Display/Typography', module)
  .add('test', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

storiesOf('Data Display/Iconography', module)
  .add('test', () => ({
    component: ButtonComponent,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));
