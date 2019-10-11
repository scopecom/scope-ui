import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'scui-document-header',
  template: `
    <div class="scui-document-header">
      <h2 class="scui-document-title">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</h2>
    </div>
  `,
})
export class ScUiDocumentTitleComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [ScUiDocumentTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiDocumentTitleComponent]
})
export class ScUiDocumentTitleModule {
}
