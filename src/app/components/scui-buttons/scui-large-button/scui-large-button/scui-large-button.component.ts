import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'scui-large-button',
  template: `
    <div (click)="btnClick" class="scui-large-button {{cssClass}}">
      <span class="btn-label">{{label}}</span>
    </div>
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
