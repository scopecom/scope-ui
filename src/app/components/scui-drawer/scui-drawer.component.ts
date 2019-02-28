import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'scui-drawer',
  template: `
    <aside class="scui-drawer" [ngClass]="'drawer-pos-' + drawerPosition">
      <div class="drawer-inner" *ngIf="drawerState">
        <ng-content></ng-content>
      </div>
      <div class="drawer-collapse" *ngIf="collapse" (click)="toggleDrawer()"></div>
    </aside>
  `
})
export class ScUiDrawerComponent implements OnChanges {
  @Input() collapse = false;
  @Input() drawerOpen: boolean;
  @Input() drawerPosition: 'left' | 'right' = 'left';

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
