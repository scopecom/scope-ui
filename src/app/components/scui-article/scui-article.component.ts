import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ScUiArticle } from '../../interfaces';

@Component({
  selector: 'scui-article',
  template: `
    <article class="scui-article">


      <article class="delete" *ngIf="article.mode === 'delete'">
        <div class="bar"></div>
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
      </article>


      <article class="edit" *ngIf="article.mode === 'edit'">
        <figure [ngStyle]="{'background-image': 'url(' + article.photoUrl + ')'}" class="scui-article-img">
          <div class="img"></div>
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
            <button class="icon-btn" (click)="importArticle(article)"><span class="icon icon-pen-2"></span></button>
            <button class="icon-btn"><span class="icon icon-check-single"></span></button>
          </footer>
        </aside>
      </article>
      <article class="default" *ngIf="article.mode === 'default'">
        <figure [ngStyle]="{'background-image': 'url(' + article.photoUrl + ')'}" class="scui-article-img">
          <div class="img"></div>
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
            <span class="icon icon-e-add"></span>
          </footer>
        </aside>
      </article>
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
