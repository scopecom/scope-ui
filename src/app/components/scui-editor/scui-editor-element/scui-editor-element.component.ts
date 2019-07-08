import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'scui-editor-element',
  template: `
    <div class="scui-editor-element">
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

  constructor() {
  }

  ngOnInit() {
  }

}
