import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ScuiDropdownModule} from '../app/components/scui-dropdown/scui-dropdown.module';


storiesOf('Project', module)
  .addDecorator(moduleMetadata({
    imports: [
      ScuiDropdownModule
    ]
  }))
  .add('Project selector', () => ({
    template: `<div style="margin: 20px;padding:20px;">
                  <scui-dropdown [selectedOption]="selectedOption" [options]="options"></scui-dropdown>
               </div>`,
    props: {
      options: [{
        label: 'One',
        id: 1
      }, {
        label: 'Two',
        id: 2
      }, {
        label: 'Three',
        id: 3
      }],
      selectedOption: {
        label: 'Select Project',
        id: 0
      }
    }
  }));


