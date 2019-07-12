import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'scui-large-button',
  template: `
    <button (click)="btnClick()" class="scui-button {{cssClass}}">
      <span class="btn-label">{{label}}</span>
    </button>
  `,
})
export class ScUiLargeButtonComponent implements OnInit {
  @Input() label: string;
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
