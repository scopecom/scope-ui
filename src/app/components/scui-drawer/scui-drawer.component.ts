import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
  Renderer2,
} from '@angular/core';
import { ScUiSubMenuItem } from '../../interfaces';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';

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

  constructor(private renderer: Renderer2) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.drawerState = changes.drawerOpen.currentValue;
  }

  toggleDrawer() {
    this.drawerState = !this.drawerState;
    if (this.drawerState) {
      this.renderer.addClass(document.body, 'scui-drower-open');
    } else {
      this.renderer.removeClass(document.body, 'scui-drower-open');
    }
  }
}

@Component({
  selector: 'scui-drawer-nav',
  template: `
    <nav class="submenu-nav">
      <h2 class="submenu-nav-title">{{ title }} ({{ subMenuItems.length }})
        <span class="icon icon-e-add"></span>
      </h2>
      <ul class="submenu-nav-items">
        <div *ngIf="sortable; else itemsTpl" [dragula]="sortable" [dragulaModel]="subMenuItems">
          <ng-container *ngTemplateOutlet="itemsTpl"></ng-container>
        </div>
      </ul>
    </nav>
    <ng-template #itemsTpl>
      <li (click)="selectItem(item)"
          [ngClass]="{'active': item.active || (item.id === activeItemId)}"
          routerLinkActive="active"
          *ngFor="let item of subMenuItems"
          class="submenu-nav-item">
        <div class="list-item">
          <span *ngIf="sortable" class="icon icon1 icon-zoom-99 handle"></span>
          <span class="icon icon1 icon-app-store"></span>
          <a [routerLink]="item.routerLink" class="submenu-nav-label">{{item.name || item.title}}</a>
          <span class="submenu-nav-actions">
            <button class="icon-btn-empty" (click)="deleteItem(item, $event)"><span class="icon icon2 icon-e-remove"></span></button>
            <button class="icon-btn-empty" (click)="editItem(item, $event)"><span class="icon icon2 icon-settings-gear"></span></button>
          </span>
        </div>
      </li>
    </ng-template>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ScUiDrawerNavComponent implements OnInit, OnDestroy {
  @Input() subMenuItems: ScUiSubMenuItem[];
  @Input() title: string;
  @Input() sortable: string = null;
  @Input() activeItemId: number;

  @Output() onItemSelect = new EventEmitter<ScUiSubMenuItem>();
  @Output() onItemEdit = new EventEmitter<ScUiSubMenuItem>();
  @Output() onItemDelete = new EventEmitter<ScUiSubMenuItem>();
  @Output() onItemReorder = new EventEmitter<ScUiSubMenuItem[]>();

  dragInProgress = false;

  private subs: Subscription;

  constructor(private dndService: DragulaService) {
  }

  ngOnInit() {
    if (this.sortable) {
      this.subs = new Subscription();
      this.subs.add(
        this.dndService.dropModel(this.sortable).subscribe(({targetModel}) => {
          this.onItemReorder.emit(targetModel);
        })
      );

      this.subs.add(
        this.dndService.drag(this.sortable).subscribe(() => {
          this.dragInProgress = true;
        })
      );

      this.subs.add(
        this.dndService.drop(this.sortable).subscribe(() => {
          this.dragInProgress = false;
        })
      );

      this.dndService.createGroup(this.sortable.toString(), {
        moves: (el, source, handle) => {
          return handle.classList.contains('handle');
        }
      });
    }
  }

  ngOnDestroy() {
    if (this.sortable) {
      this.dndService.destroy(this.sortable.toString());
      this.subs.unsubscribe();
    }
  }

  selectItem(item: ScUiSubMenuItem) {
    this.onItemSelect.emit(item);
  }

  deleteItem(item: ScUiSubMenuItem, event) {
    event.stopPropagation();
    this.onItemDelete.emit(item);
  }

  editItem(item: ScUiSubMenuItem, event) {
    event.stopPropagation();
    this.onItemEdit.emit(item);
  }
}
