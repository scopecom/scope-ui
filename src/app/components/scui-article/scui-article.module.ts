import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiArticleComponent } from './scui-article.component';

@NgModule({
  declarations: [ScUiArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiArticleComponent]
})
export class ScUiArticleModule {
}
