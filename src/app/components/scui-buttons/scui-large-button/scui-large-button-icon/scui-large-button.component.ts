import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'scui-large-button-icon',
  template: `
    <button (click)="btnClick()" class="scui-button-icon {{cssClass}}" [disabled]="disabled">
      <div class="btn-wrap">
        <div>
          <span class="icon {{ icon }}"></span>
        </div>
        <div class="btn-label">{{label}}</div>
      </div>
    </button>
  `,
})
export class ScUiLargeButtonIconComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() icon = 'icon-arrow-right';
  @Input() cssClass = 'btn-large-icon-blue';
  @Output() onBtnClick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  btnClick() {
    this.onBtnClick.emit();
  }
}
