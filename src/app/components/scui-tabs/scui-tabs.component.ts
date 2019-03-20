import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scui-tabs',
  template: `
    <section>
      <h1>gaga</h1>
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
