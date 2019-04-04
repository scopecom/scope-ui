import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ScUiArticle } from '../../interfaces';

@Component({
  selector: 'scui-article',
  template: `
    <article class="scui-article">
<!--      <article class="delete" *ngIf="article.mode === 'delete'">
        <div class="header">
          <div>
            <span class="icon icon-c-warning"></span>
            <span>REMOVE ARTICLE</span>
          </div>
        </div>
        <div class="content">
          <div>Do you really want to remove this imported article?</div>
        </div>
        <div class="footer">
          <div class="btn cancel">CANCEL</div>
          <div class="btn remove">REMOVE</div>
        </div>
      </article>-->
      <article class="edit" *ngIf="article.mode === 'edit'">
        <figure class="scui-article-img">
          <div [ngStyle]="{'background-image': 'url(' + article.photoUrl + ')'}" class="img"></div>
        </figure>
        <aside class="scui-article-content">
          <header class="scui-article-header">
            <time>{{article.date}}</time>
            <a href="#"><span class="icon icon-globe"></span></a>
          </header>
          <div class="scui-article-desc">
            <h3>{{article.title}}</h3>
            <p><a [href]="article.url" target="_blank">{{article.description}}</a></p>
          </div>
          <footer class="scui-article-footer">
            <div class="pills-box">
              <span class="pill">
                <span class="icon icon-app-store"></span>
                <span class="value">2</span>
              </span>
              <span class="pill">
                <span class="icon icon-single-folded"></span>
                <span class="value">2</span>
              </span>
            </div>
            <span class="article-action-2">
              <span class="icon icon-pen-2"></span>
            </span>
            <span class="article-action">
              <span class="icon icon-e-remove"></span>
            </span>
          </footer>
        </aside>
      </article>
<!--      <article class="default" *ngIf="article.mode === 'default'">
        <figure class="scui-article-img">
          <div [ngStyle]="{'background-image': 'url(' + article.photoUrl + ')'}" class="img"></div>
        </figure>
        <aside class="scui-article-content">
          <header class="scui-article-header">
            <time>{{article.date}}</time>
            <a href="#"><span class="icon icon-globe"></span></a>
          </header>
          <div class="scui-article-desc">
            <h3>{{article.title}}</h3>
            <p><a [href]="article.url" target="_blank">{{article.description}}</a></p>
          </div>
          <footer class="scui-article-footer">
            <span class="article-action">
              <span class="icon icon-e-add"></span>
            </span>
          </footer>
        </aside>
      </article>-->
    </article>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiArticleComponent implements OnInit {
  @Input() article: ScUiArticle;

  @Output() articleImport = new EventEmitter<ScUiArticle>();

  constructor() {
  }

  ngOnInit() {
  }

  importArticle(article: ScUiArticle) {
    this.articleImport.emit(article);
  }

}
