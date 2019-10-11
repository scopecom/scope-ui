import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'scui-modal-container',
  template: `
    <div class="scui-modal-container">
      <div class="modal-container-header">
        <div>
          <span class="icon icon-lock"></span>
          <span class="modal-container-header-info">Title</span>
        </div>
      </div>
      <div class="modal-container-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class ScUiModalContainerComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [ScUiModalContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiModalContainerComponent]
})
export class ScUiModalContainerModule {
}
