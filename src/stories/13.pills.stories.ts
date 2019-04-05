import { storiesOf } from '@storybook/angular';
import { PillsListStub } from '../app/constants/pills.list';
import { ScUiPillComponent } from '../app/components/scui-pills/scui-pills.module';


storiesOf('Pills', module)
  .add('pills', () => ({
    component: ScUiPillComponent,
    props: PillsListStub[0],
  }));
