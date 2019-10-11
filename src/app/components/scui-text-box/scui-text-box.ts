import {Component, Input, NgModule, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'scui-text-box',
  template: `
    <div class="scui-text-box">
    asdfasdfasf
    </div>
  `,
})
export class ScUiTextBoxComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

@NgModule({
  declarations: [ScUiTextBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiTextBoxComponent]
})
export class ScUiTextBoxModule {
}
