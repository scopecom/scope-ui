import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'scui-form-container',
  template: `
    <div class="form-container {{cssClass}}">
      <div class="form-container-menu">
        <div>
          <span class="icon" [ngClass]="iconClass"></span>
          <span class="info">{{ label }}</span>
        </div>
      </div>
      <div class="form-container-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class FormContainerComponent implements OnInit {
  @Input() cssClass = 'form-default';
  @Input() label = 'Project Info';
  @Input() iconClass = 'icon-c-info';

  constructor() {
  }

  ngOnInit() {
  }

}

