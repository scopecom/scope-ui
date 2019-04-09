import { moduleMetadata, storiesOf } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { ScUiArticleComponent } from '../app/components/scui-article/scui-article.component';
import { ArticleListStub } from '../app/constants/article.list';

storiesOf('Data Display', module)
  .addDecorator(
    moduleMetadata({
      imports: [CommonModule],
      declarations: [ScUiArticleComponent]
    })
  )
  .add('Article Default', () => ({
    template: `<scui-article [article]="articleList[0]"></scui-article>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article Edit Mode', () => ({
    template: `<scui-article [article]="articleList[1]"></scui-article>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article Imported Mode', () => ({
    template: `<scui-article [article]="articleList[3]"></scui-article>`,
    props: {
      articleList: ArticleListStub,
    },
  }))
  .add('Article Delete Mode', () => ({
    template: `<scui-article [article]="articleList[2]"></scui-article>`,
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
