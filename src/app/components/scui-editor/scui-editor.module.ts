import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScUiEditorArticleComponent, ScUiEditorArticleBoxComponent } from './scui-editor-article/scui-editor-article.component';
import { ScUiEditorElementComponent } from './scui-editor-element/scui-editor-element.component';
import { ImageCropModule } from '../../directives/image-crop.module';
import { ClipboardModule } from '../../directives/clipboard.module';

@NgModule({
  declarations: [ScUiEditorArticleComponent, ScUiEditorArticleBoxComponent, ScUiEditorElementComponent],
    imports: [
        CommonModule,
        ImageCropModule,
        ClipboardModule
    ],
  exports: [ScUiEditorArticleComponent, ScUiEditorArticleBoxComponent, ScUiEditorElementComponent]
})
export class ScUiEditorModule {
}
