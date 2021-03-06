import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ArticleListStub } from '../app/constants/article.list';
import { ScUiEditorModule } from '../app/components/scui-editor/scui-editor.module';

storiesOf('Editor', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule, ScUiEditorModule],
    })
  )
  .add('Content element background when dragged', () => ({
    template: `
      <div style="background: #fff; padding: 20px;">
        <scui-editor-element [elementMeta]="elementMeta"></scui-editor-element>
      </div>
    `,
    props: {
      elementMeta: {
        label: 'Article Container',
        iconClass: 'icon-microsoft'
      }
    }
  }))
  .add('Content element on drag', () => ({
    template: `
      <div style="background: #fff; padding: 20px; width: 100%;" class="gu-mirror">
        <scui-editor-element [elementMeta]="elementMeta"></scui-editor-element>
      </div>
    `,
    props: {
      elementMeta: {
        label: 'Text Editor',
        iconClass: 'icon-align-left-2'
      }
    }
  }))
  .add('Editor Article default + hover', () => ({
    template: `
    <div style="background: white;padding:20px; width: 100%;">
       <scui-editor-article [article]="articleList[0]"></scui-editor-article>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }))
  .add('Editor Article default on drag', () => ({
    template: `
    <div style="background: white;padding:20px; width: 100%;" class="gu-mirror">
       <scui-editor-article [article]="articleList[0]"></scui-editor-article>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }))
  .add('Editor Article linked + hover', () => ({
    template: `
    <div style="background: white;padding:20px; width: 100%;">
       <scui-editor-article [article]="articleList[1]"></scui-editor-article>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }))
  .add('Editor Article linked on drag', () => ({
    template: `
    <div style="background: white;padding:20px; width: 100%;" class="gu-mirror">
       <scui-editor-article [article]="articleList[1]"></scui-editor-article>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }))
  .add('Editor Article In Article List', () => ({
    template: `
    <div style="background: white;padding:20px; width: 100%;" >
       <scui-editor-article-box [article]="articleItem"></scui-editor-article-box>
    </div>
    `,
    props: {
      articleItem: {
        articleImageUrl: 'https://storage.googleapis.com/static-imgs/scope-ui/scope-image-dummy.png',
        articleSource: '12313',
        articleTitle: '123123',
        articleComment: '123123'
      },
    }
  }))
  .add('Editor Article In Article List Editable', () => ({
    template: `
    <div style="background: white;padding:20px; width: 100%;" >
       <scui-editor-article-box [article]="articleItem"></scui-editor-article-box>
    </div>
    `,
    props: {
      articleItem: {
        articleImageUrl: 'https://storage.googleapis.com/static-imgs/scope-ui/scope-image-dummy.png',
        articleSource: '12313',
        articleTitle: '123123',
        articleComment: '123123'
      },
    }
  }));
