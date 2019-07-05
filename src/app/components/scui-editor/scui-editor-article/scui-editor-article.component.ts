import { Component, Input, OnInit } from '@angular/core';
import { ScUiArticle } from '../../../interfaces';

@Component({
  selector: 'scui-editor-article',
  template: `
    <div class="scui-editor-article" [ngClass]="{'linked': article.linked}">
      <div class="editor-article-overlay"></div>
      <div [ngStyle]="{'background-image': 'url(' + article.photoUrl + ')'}"
           class="editor-article-img">
      </div>
      <span class="icon icon-cloud-forecast-2" *ngIf="!article.linked;"></span>
      <span class="icon icon-scope-square-neg" *ngIf="article.linked;"></span>
      <div class="editor-article-date">{{ article.date | date:'dd.LL.yyyy' }}</div>
      <div class="editor-article-title">{{ article.publisher }}</div>
      <div class="editor-article-content-wrap">
        <div class="editor-article-content">
          {{ article.title }}
        </div>
      </div>
    </div>
  `
})
export class ScUiEditorArticleComponent implements OnInit {
  @Input() article: ScUiArticle;

  constructor() {
  }

  ngOnInit() {
  }

}
