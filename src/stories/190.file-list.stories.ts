import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ScUiArticleStatusModule} from '../app/components/scui-article-status/scui-article-status.module';

storiesOf('File Lists', module)
  .addDecorator(moduleMetadata({
    imports: [ScUiArticleStatusModule]
  }))
  .add('Article element', () => ({
    template: `<div style="padding: 20px;">
      <scui-article-status [author]="author" [title]="title" [outputChannels]="outputChannels" ></scui-article-status>
      </div>`,
    props: {
      author: 'Author',
      title: 'Title',
      outputChannels: [
        {
          type: 'SCOPE_TO_EMAIL',
          status: ''
        },
        {
          type: 'FACEBOOK_PAGE',
          status: ''
        },
        {
          type: 'LINKEDIN_PAGE',
          status: 'published'
        },
        {
          type: 'TWITTER',
          status: 'scheduled'
        },
        {
          type: 'WORDPRESS',
          status: 'published'
        },
        {
          type: 'GOOGLE_DOC',
          status: 'published'
        },
        {
          type: 'MAILCHIMP',
          status: 'published'
        },
        {
          type: 'SALES_FORCE',
          status: 'scheduled'
        },
        {
          type: 'HUBSPOT',
          status: 'published'
        }
      ]
    }
  }));
