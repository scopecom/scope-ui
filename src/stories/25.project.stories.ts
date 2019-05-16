import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ScuiDropdownModule} from '../app/components/scui-dropdown/scui-dropdown.module';
import {ScUiProjectSelectorModule} from '../app/components/scui-project-selector/scui-project-selector.module';


storiesOf('Project', module)
  .addDecorator(moduleMetadata({
    imports: [
      ScuiDropdownModule,
      ScUiProjectSelectorModule
    ]
  }))
  .add('Standard select', () => ({
    template: `<div style="padding:40px; background:white; ">
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
  }))
  .add('Project selector', () => ({
    template: `<div style="padding:40px; background:white; ">
                    <scui-project-selector [options]="options"></scui-project-selector>
               </div>`,
    props: {
      options: [{
        label: 'Select Project',
        id: 0
      }, {
        label: 'Internal 03/19',
        id: 1
      }, {
        label: 'Sales - Product Update',
        id: 2
      }, {
        label: 'Campaign expovina',
        id: 3
      }]
    }
  }));


