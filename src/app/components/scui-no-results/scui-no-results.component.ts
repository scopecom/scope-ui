import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scui-no-results',
  template: `
  <div class="scui-no-results">
    <div class="projects-content-header">
      <h2 class="content-header-title">{{title}}</h2>
    </div>
    <div class="projects-content-wrap">
      <ng-content></ng-content>
    </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiNoResultsComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {

  }

}
