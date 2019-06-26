import {moduleMetadata, storiesOf} from '@storybook/angular';
import {ArticleListStub} from '../app/constants/article.list';
import {CommonModule} from '@angular/common';
import {ScUiArticleComponent} from '../app/components/scui-article/scui-article.component';
import {ScUiArticleImageComponent} from '../app/components/scui-article/scui-article-image/scui-article-image.component';
import {ScuiArticleContentComponent} from '../app/components/scui-article/scui-article-content/scui-article-content.component';

storiesOf('Assets', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ScUiArticleComponent, ScUiArticleImageComponent, ScuiArticleContentComponent]
    })
  )
  .add('Article Default', () => ({
    template: `<div style="margin:20px;"><scui-article [article]="articleList[0]"></scui-article></div>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article Edit Mode', () => ({
    template: `<div style="margin:20px;"><scui-article [article]="articleList[1]"></scui-article></div>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article Imported Mode', () => ({
    template: `<div style="margin:20px;"><scui-article [article]="articleList[3]"></scui-article></div>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article Default (no image)', () => ({
    template: `<div style="margin:20px;"><scui-article [article]="articleList[4]"></scui-article></div>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article Imported Mode article (no image)', () => ({
    template: `<div style="margin:20px;"><scui-article [article]="articleList[5]"></scui-article></div>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article Edit Mode (no image)', () => ({
    template: `<div style="margin:20px;"><scui-article [article]="articleList[6]"></scui-article></div>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article in Container', () => ({
    template: `
    <div class="scui-content">
      <div class="scui-container">
        <div class="scui-content">
          <div class="scui-row">
            <scui-article [article]="articleList[0]"></scui-article>
          </div>
        </div>
      </div>
    </div>`,
    props: {
      articleList: ArticleListStub,
    }
  }))
  .add('Article List', () => ({
    template: `
    <div class="scui-content">
      <div class="scui-container">
        <div class="scui-content">
          <div class="scui-row">
            <scui-article *ngFor="let article of articleList" [article]="article"></scui-article>
          </div>
        </div>
      </div>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }));
