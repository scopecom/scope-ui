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
        <h3><a [href]="url" target="_blank">{{headlineOutput}}</a></h3>
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
  headlineOutput: string;

  constructor() {
  }

  ngOnInit() {
    const helineLimit = 93;
    const commentLimit = 210;
    if(this.headline.length >= helineLimit) {
      this.headlineOutput = this.headline.substring(0, helineLimit);
      this.headlineOutput = this.headlineOutput.substr(0, Math.min(this.headlineOutput.length, this.headlineOutput.lastIndexOf(" "))) + '...';
    } else {
      this.headlineOutput = this.headline;
    }

    if(typeof this.comment === 'string') {
      if (this.comment.length >= 210) {
        this.commentOutput = this.comment.substring(0, 210);
        this.commentOutput = this.commentOutput.substr(0, Math.min(this.commentOutput.length, this.commentOutput.lastIndexOf(" "))) + '...';
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







