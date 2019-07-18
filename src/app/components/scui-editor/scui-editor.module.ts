import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiEditorArticleComponent } from './scui-editor-article/scui-editor-article.component';
import { ScUiEditorElementComponent } from './scui-editor-element/scui-editor-element.component';
import { ImageCropModule } from '../../directives/image-crop.module';

@NgModule({
  declarations: [ScUiEditorArticleComponent, ScUiEditorElementComponent],
  imports: [
    CommonModule,
    ImageCropModule
  ],
  exports: [ScUiEditorArticleComponent, ScUiEditorElementComponent]
})
export class ScUiEditorModule {
}
