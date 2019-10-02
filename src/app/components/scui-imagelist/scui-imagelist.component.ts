import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scui-image-box',
  template: `
  <div class="scui-image-box">
    <div class="scui-image-box--image">
      <img src="https://ce850c98c.cloudimg.io/crop/392x205/tjpg/https://bargainbriana.com/wp-content/uploads/320x480_1.jpg" />
    </div>
    <div class="scui-image-box--container">
      <h3 class="scui-image-box--title">article title</h3>
      <div class="scui-image-box--content">
        article content
      </div>
    </div>
  </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiImageListComponent implements OnInit {
  @Input() title: string;

  constructor() {
  }

  ngOnInit() {

  }

}
