import {
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'scui-article-image',
  template: `
    <figure class="scui-article-img {{state}}">
      <div class="image-overlay"></div>
      <div [ngStyle]="{'background-image': 'url(' + photoUrl + ')'}" class="img">
        <div class="article-no-image" *ngIf="!photoUrl">
          <div class="article-no-image-content">
            <div class="no-image-1">{{ label1 }}</div>
            <div class="no-image-2">{{ label2 }}</div>
          </div>
        </div>
      </div>
    </figure>
  `,
})
export class ScUiArticleImageComponent implements OnInit {
  @Input() label1 = 'Sorry.';
  @Input() label2 = 'No preview available this time.';
  @Input() photoUrl: string;
  @Input() state: string;
  @Input() cssClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}






