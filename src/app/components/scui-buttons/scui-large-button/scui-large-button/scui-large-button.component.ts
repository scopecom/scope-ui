import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'scui-large-button',
  template: `
    <button (click)="btnClick()" [ngClass]="{'btn-large-disabled': disabled}" class="scui-button {{cssClass}}" [disabled]="disabled">
      <span class="btn-label">{{label}}</span>
    </button>
  `,
})
export class ScUiLargeButtonComponent implements OnInit {
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
