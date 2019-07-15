import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'scui-small-button',
  template: `
    <button (click)="btnClick()" class="scui-button small {{cssClass}}" [disabled]="disabled">
      <span class="btn-label">{{label}}</span>
    </button>
  `,
})
export class ScUiSmallButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disabled: boolean;
  @Input() cssClass = 'btn-large-default';
  @Output() onBtnClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

  btnClick() {
    this.onBtnClick.emit();
  }
}
