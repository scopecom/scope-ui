import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScUiArticleComponent} from './scui-article.component';
import {ScUiArticleImageComponent} from './scui-article-image/scui-article-image.component';
import {ScuiArticleContentComponent} from './scui-article-content/scui-article-content.component';

@NgModule({
  declarations: [ScUiArticleComponent, ScUiArticleImageComponent, ScuiArticleContentComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiArticleComponent, ScUiArticleImageComponent, ScuiArticleContentComponent]
})
export class ScUiArticleModule {
}
