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
        <div class="scui-article-desc__commentWrap" *ngIf="mode === 'edit'">
          <span class="scui-article-desc__commentLabel">COMMENT:</span>
          <p class="scui-article-desc__comment">{{ commentOutput }}</p>
        </div>
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

  commentOutput: string;

  constructor() {
  }

  ngOnInit() {
    if(typeof this.comment === 'string') {
      if (this.comment.length >= 250) {
        this.commentOutput = this.comment.slice(0, 250) + '...';
      } else if (this.comment.length === 0) {
        this.commentOutput = '(no comment)';
      } else {
        this.commentOutput = this.comment;
      }
    } else {
      this.commentOutput = '(no comment)'
    }
  }

}







