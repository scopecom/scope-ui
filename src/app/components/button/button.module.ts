import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'scui-button',
  template: `
    <button class="scui-btn" (click)="onClick.emit($event);" [disabled]="disabled">{{text}}</button>
  `,
  styles: [
    `
      .scui-btn {
        background-color: #3399FF;
        color: #fff;
        border: 0;
        outline: 0;
        border-radius: 20px;
        padding: 8px 16px;
      }
      .scui-btn:disabled {
        background-color: #b3c3c9;
      }
    `
  ]
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}


@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class ButtonModule {
}
