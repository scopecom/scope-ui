import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'scui-collapsible',
  template: `
    <section [ngClass]="{'expanded':isExpanded}" class="scui-collapsible">
      <div class="collapsible-inner">
        <div class="collapsible-controls">
          <div (click)="isExpanded = !isExpanded">
            <span class="group">
              <span *ngIf="!isExpanded" class="icon icon-right-arrow"></span>
              <span *ngIf="isExpanded" class="icon icon-down-arrow"></span>
              <span class="label">MODULES</span>
            </span>
          </div>
          <div>
            <span class="icon-wrap">
              <span class="icon icon-e-add"></span>
            </span>
            <span class="icon-wrap">
              <span class="icon icon-settings-gear"></span>
            </span>
          </div>
        </div>
        <div *ngIf="isExpanded" class="collapsible-content">{{ content }}</div>
      </div>
    </section>
  `,
})
export class ScUiCollapsibleComponent implements OnInit {

  @Input() content: string;
  isExpanded: boolean;

  constructor() {
  }

  ngOnInit() {
  }

}
