import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'scui-form-container',
  template: `
    <div class="form-container {{cssClass}}">
      <div class="form-container-menu">
        <div>
          <span class="icon icon-c-info"></span>
          <span class="info">Project Info</span>
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

  constructor() {
  }

  ngOnInit() {
  }

}

