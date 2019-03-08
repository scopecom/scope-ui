import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'scui-card',
  template: `
    <a [href]="url">
      <div [ngClass]="{active:active}"
           (mouseover)="changeStyle($event)"
           (mouseout)="changeStyle($event)"
           class="scui-card">
        <div class="overlay"></div>
        <div class="content">
          <div class="name">{{ name}}</div>
          <div class="description">{{ description}}</div>
          <span class="icon" [ngClass]="icon"></span>
        </div>
      </div>
    </a>
  `,
})
export class ScuiCardComponent implements OnInit {
  @Input() icon = '';
  @Input() name = '';
  @Input() description = '';
  @Input() url = '';
  active = false;

  constructor() {
  }

  ngOnInit() {
  }

  changeStyle($event) {
    this.active = ($event.type === 'mouseover');
  }

}
