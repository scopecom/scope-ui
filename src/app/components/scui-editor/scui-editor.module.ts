import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiEditorArticleComponent } from './scui-editor-article/scui-editor-article.component';

@NgModule({
  declarations: [ScUiEditorArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiEditorArticleComponent]
})
export class ScUiEditorModule {
}
