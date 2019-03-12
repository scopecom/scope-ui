import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scui-drawer',
  template: `
    <aside class="scui-drawer {{cssClass}} drawer-pos-{{drawerPosition}}" [ngClass]="{'collapsed': !drawerState}">
      <div class="drawer-inner" *ngIf="drawerState">
        <ng-content></ng-content>
      </div>
      <div class="drawer-collapse" *ngIf="collapse" (click)="toggleDrawer()"></div>
    </aside>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiDrawerComponent implements OnChanges {
  @Input() collapse = false;
  @Input() drawerOpen: boolean;
  @Input() drawerPosition: 'left' | 'right' = 'left';
  @Input() cssClass: string;

  drawerState: boolean;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.drawerState = changes.drawerOpen.currentValue;
  }

  toggleDrawer() {
    this.drawerState = !this.drawerState;
  }
}
