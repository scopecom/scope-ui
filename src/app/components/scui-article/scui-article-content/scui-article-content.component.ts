import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'scui-article-content',
  template: `
    <div class="scui-article-content {{ mode }}">
      <div class="scui-article-desc">
        <h3><a [href]="url" target="_blank">{{headline}}</a></h3>
        <p class="scui-article-desc__comment">{{ commentFinal }}</p>
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
  @Input() comment = 'Comment';

  commentFinal: string;

  constructor() {
  }

  ngOnInit() {
    if(this.comment.length == 0) {
      this.commentFinal = '(no comment)'
    } else if (this.comment.length >= 250) {
      this.commentFinal = this.comment.slice(0, 250) + '...';
    } else {
      this.commentFinal = this.comment;
    }
  }

}







