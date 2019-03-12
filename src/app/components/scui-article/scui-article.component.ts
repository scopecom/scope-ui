import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ScUiArticle } from '../../interfaces';

@Component({
  selector: 'scui-article',
  template: `
    <article class="scui-article">
      <figure class="scui-article-img">
        <img [src]="article.photoUrl" [alt]="article.title"/>
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
          <button class="icon-btn"><span class="icon icon-e-delete"></span></button>
        </footer>
      </aside>
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
