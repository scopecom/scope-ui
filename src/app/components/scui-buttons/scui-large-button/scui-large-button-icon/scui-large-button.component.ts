import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'scui-large-button-icon',
  template: `
    <div (click)="btnClick" class="scui-large-button-icon {{cssClass}}">
      <div class="btn-wrap">
        <div>
          <span class="icon {{ icon }}"></span>
        </div>
        <div class="btn-label">{{label}}</div>
      </div>
    </div>
  `,
})
export class ScUiLargeButtonIconComponent implements OnInit {
  @Input() label: string;
  @Input() icon = 'icon-arrow-right';
  @Input() cssClass = 'btn-large-icon-blue';
  @Output() onBtnClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  btnClick() {
    this.onBtnClick.emit();
  }
}
