import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import { ScUiNoResultsModule } from '../app/components/scui-no-results/scui-no-results.module';

storiesOf('Layout', module)
  .addDecorator(
    moduleMetadata({
      imports: [ScUiNoResultsModule, RouterTestingModule]
    })
  )

  .add('No Results Component', () => ({
    template: `
      <scui-no-results [title]="title">
        Go to <a routerLink="../../discover">Discovery</a> to find new content or use the <a routerLink="../../assets">Asset Library</a> to assign assets that you have already imported to this project.
      </scui-no-results>
    `,
    props: {
      title: 'title',
    },
  }))

  .add('placeholder', () => ({
    template: `<div>Placeholder</div>`
  }));
