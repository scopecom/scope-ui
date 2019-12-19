import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ScUiFileModule} from '../app/components/scui-file/scui-file.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

storiesOf('File Lists', module)
  .addDecorator(moduleMetadata({
    imports: [ScUiFileModule, BrowserAnimationsModule]
  }))
  .add('Article element', () => ({
    template: `<div style="padding: 20px;">
      <scui-file [author]="author" [file]="file" [outputChannels]="outputChannels" ></scui-file>
      </div>`,
    props: {
      author: 'Author',
      file: {
        title: 'Title',
        body: '',
        meta: '',
        status: 'ACTIVE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      outputChannels: [
        {
          type: 'SCOPE_TO_EMAIL',
          status: ''
        },
        {
          type: 'FACEBOOK_PAGE',
          status: 'PUBLISHED',
          datePublished: '27.04.2019',
          timePublished: '18.15',
          publicationDate: '2019-08-22T09:10:32Z'
        },
        {
          type: 'LINKEDIN_PAGE',
          status: 'PUBLISHED',
          datePublished: '27.04.2019',
          timePublished: '18.15',
          publicationDate: '2019-08-22T09:10:32Z'
        },
        {
          type: 'TWITTER',
          status: 'SCHEDULED',
          datePublished: '20.05.2019',
          timePublished: '09.15',
          publicationDate: '2019-08-22T09:10:32Z'
        },
        {
          type: 'WORDPRESS',
          status: 'PUBLISHED',
          datePublished: '27.04.2019',
          timePublished: '18.15',
          publicationDate: '2019-08-22T09:10:32Z'
        },
        {
          type: 'GOOGLE_DOC',
          status: 'SCHEDULED',
          datePublished: '20.05.2019',
          timePublished: '09.15',
          publicationDate: '2019-08-22T09:10:32Z'
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
          type: 'PARDOT',
          status: ''
        },
        {
          type: 'HUBSPOT',
          status: ''
        }
      ]
    }
  }))
  .add('Article element archived', () => ({
    template: `<div style="padding: 20px;">
      <scui-file [author]="author" [file]="file" [outputChannels]="outputChannels" ></scui-file>
      </div>`,
    props: {
      author: 'Author',
      file: {
        title: 'Title',
        body: '',
        meta: '',
        status: 'ARCHIVED',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      outputChannels: [
        {
          type: 'SCOPE_TO_EMAIL',
          status: ''
        },
        {
          type: 'FACEBOOK_PAGE',
          status: 'PUBLISHED',
          datePublished: '27.04.2019',
          timePublished: '18.15',
          publicationDate: '2019-08-22T09:10:32Z'
        },
        {
          type: 'LINKEDIN_PAGE',
          status: 'PUBLISHED',
          datePublished: '27.04.2019',
          timePublished: '18.15',
          publicationDate: '2019-08-22T09:10:32Z'
        },
        {
          type: 'TWITTER',
          status: 'SCHEDULED',
          datePublished: '20.05.2019',
          timePublished: '09.15',
          publicationDate: '2019-08-22T09:10:32Z'
        },
        {
          type: 'WORDPRESS',
          status: 'PUBLISHED',
          datePublished: '27.04.2019',
          timePublished: '18.15',
          publicationDate: '2019-08-22T09:10:32Z'
        },
        {
          type: 'GOOGLE_DOC',
          status: 'SCHEDULED',
          datePublished: '20.05.2019',
          timePublished: '09.15',
          publicationDate: '2019-08-22T09:10:32Z'
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
