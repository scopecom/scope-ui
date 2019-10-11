import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScUiArticleComponent} from './scui-article.component';
import {ScUiArticleImageComponent} from './scui-article-image/scui-article-image.component';
import {ScuiArticleContentComponent} from './scui-article-content/scui-article-content.component';
import { ImageCropModule } from '../../directives/image-crop.module';

@NgModule({
  declarations: [ScUiArticleComponent, ScUiArticleImageComponent, ScuiArticleContentComponent],
  imports: [
    CommonModule,
    ImageCropModule
  ],
  exports: [ScUiArticleComponent, ScUiArticleImageComponent, ScuiArticleContentComponent]
})
export class ScUiArticleModule {
}
