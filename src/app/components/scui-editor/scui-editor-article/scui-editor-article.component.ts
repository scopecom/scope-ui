import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ScUiArticle } from '../../../interfaces';

@Component({
  selector: 'scui-editor-article',
  template: `
    <div class="scui-editor-article" [ngClass]="{'linked': article.linked}">
      <div class="editor-article-image-wrap">
        <div class="editor-article-overlay"></div>
        <div scuiImageCropper="bgImage" [photoUrl]="article.photoUrl"
            class="editor-article-img">
        </div>
        <span class="icon icon-cloud-forecast-2" *ngIf="!article.linked;"></span>
        <span class="icon icon-scope-square-neg" *ngIf="article.linked;"></span>
        <div class="editor-article-date">{{ article.date | date:'dd.LL.yyyy' }}</div>
        <div class="editor-article-title">{{ article.publisher }}</div>
      </div>
      <div class="editor-article-content-wrap">
        <div class="editor-article-content">
          <div class="editor-article-content-title">{{ article.title }}</div>
          <div class="editor-article-content-comment" *ngIf="article.comment; else noComment">{{ article.comment }}</div>
          <ng-template #noComment>(no comment)</ng-template>
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

@Component({
  selector: 'scui-editor-article-box',
  template: `
    <div class="scui-editor-article-box">
      <div class="remove-article" (click)="removeArticle.emit()">
        <span class="icon icon-i-remove"></span>
      </div>
      <div scuiImageCropper="bgImage" [photoUrl]="article.articleImageUrl"
           class="editor-article-img">
      </div>
      <div class="scui-editor-article-box-meta">
      <div class="box-info">
          <strong class="scui-editor-article-box-title">Title</strong>
          <span class="scui-editor-article-box-content" scuiClipboard (blur)="articleUpdate($event.target?.innerHTML, 'articleTitle')" contenteditable="true">{{article.articleTitle}}</span>
        </div>
        <div class="box-info">
          <strong class="scui-editor-article-box-title">Publisher</strong>
          <span class="scui-editor-article-box-content" scuiClipboard (blur)="articleUpdate($event.target?.innerHTML, 'articleSource')" contenteditable="true">{{article.articleSource}}</span>
        </div>
        <div class="box-info">
          <strong class="scui-editor-article-box-title">Comment</strong>
          <span class="scui-editor-article-box-content" scuiClipboard (blur)="articleUpdate($event.target?.innerHTML, 'articleComment')" contenteditable="true" *ngIf="article.articleComment; else noComment">{{article.articleComment}}</span>
          <ng-template #noComment><span (blur)="articleUpdate($event.target?.innerHTML, 'articleComment')" contenteditable="true">(no comment)</span></ng-template>
        </div>
      </div>
    </div>
  `
})
export class ScUiEditorArticleBoxComponent {
  @Input() article: {
    articleImageUrl: string;
    articleSource: string;
    articleTitle: string;
    articleComment: string;
  };

  @Output() removeArticle = new EventEmitter();
  @Output() updateArticle = new EventEmitter();

  articleUpdate(event, articleProp) {
    this.article = {
      ...this.article,
      [articleProp]: event
    };

    this.updateArticle.emit(this.article);
  }

}
