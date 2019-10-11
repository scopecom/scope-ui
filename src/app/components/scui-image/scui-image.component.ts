import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scui-image',
  template: `
  <div class="scui-image">
    <img src="https://ce850c98c.cloudimg.io/crop/392x205/tjpg/https://bargainbriana.com/wp-content/uploads/320x480_1.jpg" />
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiImageComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {

  }

}
