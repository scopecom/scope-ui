import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ScUiFileModule} from '../app/components/scui-file/scui-file.module';

storiesOf('File Lists', module)
  .addDecorator(moduleMetadata({
    imports: [ScUiFileModule]
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
          status: 'published',
          datePublished: '27.04.2019',
          timePublished: '18.15'
        },
        {
          type: 'LINKEDIN_PAGE',
          status: 'published',
          datePublished: '27.04.2019',
          timePublished: '18.15'
        },
        {
          type: 'TWITTER',
          status: 'scheduled',
          datePublished: '20.05.2019',
          timePublished: '09.15'
        },
        {
          type: 'WORDPRESS',
          status: 'published',
          datePublished: '27.04.2019',
          timePublished: '18.15'
        },
        {
          type: 'GOOGLE_DOC',
          status: 'scheduled',
          datePublished: '20.05.2019',
          timePublished: '09.15'
        },
        {
          type: 'MAILCHIMP',
          status: ''
        },
        {
          type: 'SALES_FORCE',
          status: ''
        },
        {
          type: 'HUBSPOT',
          status: ''
        }
      ]
    }
  }));
