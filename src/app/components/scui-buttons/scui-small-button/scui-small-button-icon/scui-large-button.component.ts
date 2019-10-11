import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'scui-small-button-icon',
  template: `
    <button (click)="btnClick()" [ngClass]="{'btn-large-icon-disabled': disabled}" class="scui-button-icon small {{cssClass}}" [disabled]="disabled">
      <div class="btn-wrap">
        <div>
          <span class="icon {{ icon }}"></span>
        </div>
        <div class="btn-label">{{label}}</div>
      </div>
    </button>
  `,
})
export class ScUiSmallButtonIconComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: boolean;
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
