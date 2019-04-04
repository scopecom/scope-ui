import { storiesOf } from '@storybook/angular';
import { ScUiPillComponent } from '../app/components/pills/scui-pills.module';
import { PillsListStub } from '../app/constants/pills.list';


storiesOf('Pills', module)
  .add('pills', () => ({
    component: ScUiPillComponent,
    props: PillsListStub[0],
  }));
