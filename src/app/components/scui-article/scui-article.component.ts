import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ScUiArticle } from '../../interfaces';

@Component({
  selector: 'scui-article',
  template: `
    <article [ngClass]="{noImage: !article.photoUrl}" class="scui-article">
      <article class="edit" *ngIf="article.mode === 'edit'">
        <span class="icon icon-cloud-forecast-2"></span>
        <scui-article-image [photoUrl]="article.photoUrl"></scui-article-image>
        <aside class="scui-article-content">
          <scui-article-content [date]="article.date"
                                [url]="article.url"
                                [mode]="article.mode"
                                [headline]="article.title"
                                [source]="article.publisher">
          </scui-article-content>
          <footer class="scui-article-footer">
            <div class="pills-box">
              <span class="pill-info">
                <span class="value">2</span>
              </span>
            </div>
            <span class="article-action" (click)="editArticle(article)">
              <span class="icon icon-pen-2"></span>
            </span>
            <span class="article-action-2" (click)="removeArticle(article)">
              <span class="icon icon-e-remove"></span>
            </span>
          </footer>
        </aside>
      </article>
      <article class="imported" *ngIf="article.mode === 'imported'">
        <span class="icon icon-cloud-forecast-2"></span>
        <scui-article-image [state]="article.mode" [photoUrl]="article.photoUrl"></scui-article-image>
        <aside class="scui-article-content">
          <scui-article-content [date]="article.date"
                                [url]="article.url"
                                [mode]="article.mode"
                                [headline]="article.title"
                                [source]="article.publisher">
          </scui-article-content>
          <footer class="scui-article-footer">
            <div class="pills-box">
              <span class="pill-info">
                <span class="value">2</span>
              </span>
            </div>
            <span class="article-action" (click)="removeArticle(article)">
              <span class="icon icon-e-remove"></span>
            </span>
          </footer>
        </aside>
      </article>
      <article class="default" *ngIf="article.mode === 'default'">
        <scui-article-image [state]="article.mode" [photoUrl]="article.photoUrl"></scui-article-image>
        <aside class="scui-article-content">
          <scui-article-content [date]="article.date"
                                [url]="article.url"
                                [mode]="article.mode"
                                [headline]="article.title"
                                [source]="article.publisher">
          </scui-article-content>
          <footer class="scui-article-footer">
            <span class="article-action" (click)="importArticle(article)">
              <span class="icon icon-e-add"></span>
            </span>
          </footer>
        </aside>
      </article>
    </article>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiArticleComponent {
  @Input() article: ScUiArticle;

  @Output() articleImport = new EventEmitter<ScUiArticle>();
  @Output() articleEdit = new EventEmitter<ScUiArticle>();
  @Output() articleRemove = new EventEmitter<ScUiArticle>();

  importArticle(article: ScUiArticle) {
    this.articleImport.emit(article);
  }

  removeArticle(article: ScUiArticle) {
    this.articleRemove.emit(article);
  }

  editArticle(article: ScUiArticle) {
    this.articleEdit.emit(article);
  }

}
