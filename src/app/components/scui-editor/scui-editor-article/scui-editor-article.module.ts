import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScUiArticle} from '../../../interfaces';

@Component({
  selector: 'scui-editor-article',
  template: `
    <div [ngClass]="{drag:dragActive}" class="scui-editor-article {{ state }}">

      <div *ngIf="state === 'default'">
        <div class="editor-article-overlay"></div>
        <div [ngStyle]="{'background-image': 'url(' + article.photoUrl + ')'}"
             class="editor-article-img">
        </div>
        <span class="icon icon-cloud-forecast-2"></span>
        <div class="editor-article-date">{{ article.date | date:'dd.LL.yyyy' }}</div>
        <div class="editor-article-title">{{ article.title }}</div>
        <div class="editor-article-content-wrap">
          <div class="editor-article-content">
            {{ article.description}}
          </div>
        </div>
      </div>

      <div *ngIf="state === 'linked'">
        <div class="editor-article-overlay"></div>
        <div [ngStyle]="{'background-image': 'url(' + article.photoUrl + ')'}"
             class="editor-article-img">
        </div>
        <span class="icon icon-scope-square-neg"></span>
        <div class="editor-article-date">{{ article.date | date:'dd.LL.yyyy' }}</div>
        <div class="editor-article-title">{{ article.title }}</div>
        <div class="editor-article-content-wrap">
          <div class="editor-article-content">
            {{ article.description}}
          </div>
        </div>
      </div>

    </div>
  `,
})

export class ScUiEditorArticleComponent implements OnInit {
  @Input() state = 'default';
  @Input() dragActive: boolean;
  @Input() article: ScUiArticle;

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [ScUiEditorArticleComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiEditorArticleComponent]
})
export class ScUiEditorArticleModule {
}
