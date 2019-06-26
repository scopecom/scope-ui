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
        <time>{{ date | date:'d.M.yyyy' }}</time>
        -
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
  @Input() date = '01/27/2019';
  @Input() source = 'Source';
  @Input() url = '';
  @Input() headline: 'Headline';

  constructor() {
  }

  ngOnInit() {
  }

}







