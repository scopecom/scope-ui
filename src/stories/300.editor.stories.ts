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
    <div style="background: white;padding:20px;">
    <div class="editor-content-element">
      <style>
      .editor-content-element{
       background:#f2f2f2;
       display:flex;
       width:170px;
       height:170px;
       position: relative;
      }
      .editor-content-element-text{
      font-size: 70px;
      position: absolute;
      top: 37px;
      left:64px;
      color:#bbbec5;
      }
      .editor-content-element-text-2{
      font-size: 14px;
      width:100%;
      position: absolute;
      bottom: 12px;
      text-align: center;
      color:#bbbec5;
      font-weight: 300;
      }
      </style>
      <span class="editor-content-element-text">T</span>
      <div class="editor-content-element-text-2">TEXT EDITOR</div>
    </div>
</div>
    `,
  }))
  .add('Content element default + hover', () => ({
    template: `
    <div style="background: white;padding:20px;">
    <div class="editor-content-element">
      <style>
      .editor-content-element{
       background:#e4e6e8;
       display:flex;
       width:170px;
       height:170px;
       position: relative;
       cursor:move;
      }
      .editor-content-element-text{
      font-size: 70px;
      position: absolute;
      top: 37px;
      left:64px;
      color:#000;
      }
      .editor-content-element-text-2{
      font-size: 14px;
      width:100%;
      position: absolute;
      bottom: 12px;
      text-align: center;
      color:#000;
      font-weight: 300;
      }
      .editor-content-element:hover{
       outline:8px solid #cdd0d3;
      }
      </style>
      <span class="editor-content-element-text">T</span>
      <div class="editor-content-element-text-2">TEXT EDITOR</div>
    </div>
</div>
    `,
  }))
  .add('Content element on drag', () => ({
    template: `
    <div style="background: white;padding:20px;">
    <div class="editor-content-element">
      <style>
      .editor-content-element{
       background:#e4e6e8;
       display:flex;
       width:170px;
       height:170px;
       position: relative;
       outline:8px solid #0066FF;
       cursor:move;
      }
      .editor-content-element-text{
      font-size: 70px;
      position: absolute;
      top: 37px;
      left:64px;
      color:#0066FF;
      }
      .editor-content-element-text-2{
      font-size: 14px;
      width:100%;
      position: absolute;
      bottom: 12px;
      text-align: center;
      color:#0066FF;
      font-weight: 300;
      }
      </style>
      <span class="editor-content-element-text">T</span>
      <div class="editor-content-element-text-2">TEXT EDITOR</div>
    </div>
</div>
    `,
  }))
  .add('Editor Article default + hover', () => ({
    template: `
    <div style="background: white;padding:20px;">
       <scui-editor-article [article]="articleList[0]"></scui-editor-article>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }))
  .add('Editor Article default on drag', () => ({
    template: `
    <div style="background: white;padding:20px;" class="gu-mirror">
       <scui-editor-article [article]="articleList[0]"></scui-editor-article>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }))
  .add('Editor Article linked + hover', () => ({
    template: `
    <div style="background: white;padding:20px;">
       <scui-editor-article [article]="articleList[1]"></scui-editor-article>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }))
  .add('Editor Article linked on drag', () => ({
    template: `
    <div style="background: white;padding:20px;" class="gu-mirror">
       <scui-editor-article [article]="articleList[1]"></scui-editor-article>
    </div>
    `,
    props: {
      articleList: ArticleListStub,
    }
  }));
