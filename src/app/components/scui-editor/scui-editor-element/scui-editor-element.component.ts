import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'scui-editor-element',
  template: `
    <div class="scui-editor-element">
      <div class="handle"></div>
      <div class="insert-el i-top" (click)="$event.preventDefault(); insertEvt.emit('top')" role="button">
        <span class="icon-frame-s-caret-up"></span>
      </div>
      <div class="insert-el i-bot" (click)="$event.preventDefault(); insertEvt.emit('bottom')" role="button">
        <span class="icon-frame-s-caret-down"></span>
      </div>
      <div class="scui-editor-element-icon">
        <span class="icon" [ngClass]="elementMeta?.iconClass"></span>
      </div>
      <div class="scui-editor-element-label">
        {{ elementMeta?.label }}
      </div>
    </div>
  `
})
export class ScUiEditorElementComponent implements OnInit {
  @Input() element: any;
  @Input() elementMeta: { label: string; iconClass: string };

  @Output() insertEvt = new EventEmitter<'top' | 'bottom'>();

  constructor() {
  }

  ngOnInit() {
  }

}
