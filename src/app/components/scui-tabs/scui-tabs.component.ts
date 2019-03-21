import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scui-tabs',
  template: `
    <section class="scui-tabs">
      <div class="tabs">
        <div class="tab">ITEM 1</div>
        <div class="tab">ITEM 2</div>
        <div class="tab">ITEM 3</div>
      </div>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScuiTabsComponent implements OnInit {

  @Input() activeClass = 'active-tab';

  constructor() {
  }

  ngOnInit() {
  }

}
