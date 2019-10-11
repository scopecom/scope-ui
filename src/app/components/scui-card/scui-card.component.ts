import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'scui-card',
  template: `
    <a [ngClass]="{disabled:disabled}" [routerLink]="url">
      <div [ngClass]="{active:active}"
           (mouseover)="changeStyle($event)"
           (mouseout)="changeStyle($event)"
           scuiBgHover="#06f"
           class="scui-card">
        <div *ngIf="disabled" class="card-disabled">
          Work in progress
        </div>
        <div class="content">
          <div class="name">{{ name}}</div>
          <div class="description">{{ description}}</div>
          <span class="icon" [ngClass]="icon"></span>
        </div>
      </div>
    </a>
  `,
})
export class ScUiCardComponent implements OnInit {
  @Input() icon = '';
  @Input() name = '';
  @Input() description = '';
  @Input() url = '';
  @Input() disabled = false;
  active = false;

  constructor() {
  }

  ngOnInit() {
  }

  changeStyle($event) {
    this.active = ($event.type === 'mouseover');
  }

}
