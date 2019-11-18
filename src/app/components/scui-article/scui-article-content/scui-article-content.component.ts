import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'scui-article-content',
  template: `
    <div class="scui-article-content {{ mode }}">
      <header class="scui-article-header">
        <time *ngIf="date && date !== ''">{{ date | date:'d.M.yyyy' }}</time>
        <span *ngIf="date && date !== ''"> - </span>
        <span>{{ source }}</span>
      </header>
      <div class="scui-article-desc">
        <h3><a [href]="url" target="_blank">{{headline}}</a></h3>
      </div>
    </div>
  `,
})
export class ScuiArticleContentComponent implements OnInit {
  @Input() mode: string;
  @Input() date: string;
  @Input() source = 'Source';
  @Input() url = '';
  @Input() headline = 'Headline';

  constructor() {
  }

  ngOnInit() {
  }

}







