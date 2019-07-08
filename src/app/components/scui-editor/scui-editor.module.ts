import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiEditorArticleComponent } from './scui-editor-article/scui-editor-article.component';
import { ScUiEditorElementComponent } from './scui-editor-element/scui-editor-element.component';

@NgModule({
  declarations: [ScUiEditorArticleComponent, ScUiEditorElementComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiEditorArticleComponent, ScUiEditorElementComponent]
})
export class ScUiEditorModule {
}
