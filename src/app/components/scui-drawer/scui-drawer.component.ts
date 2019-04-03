import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
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

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.drawerState = changes.drawerOpen.currentValue;
  }

  toggleDrawer() {
    this.drawerState = !this.drawerState;
  }
}

@Component({
  selector: 'scui-drawer-nav',
  template: `
    <nav class="submenu-nav">
      <h2 class="submenu-nav-title color_01">{{ title }} ({{ subMenuItems.length }})</h2>
      <ul class="submenu-nav-items">
        <div *ngIf="sortable; else itemsTpl" dragula="saved-searches-bag" [dragulaModel]="subMenuItems">
          <ng-container *ngTemplateOutlet="itemsTpl"></ng-container>
        </div>
      </ul>
    </nav>
    <ng-template #itemsTpl>
      <li (click)="selectItem(item)"
          [ngClass]="{'active': item.active}"
          *ngFor="let item of subMenuItems"
          class="submenu-nav-item">
        <a routerLink="project/{{item.id}}">
          <span *ngIf="sortable" class="icon icon1 icon-zoom-99 handle"></span>
          <span class="icon icon1 icon-app-store"></span>
          <span class="submenu-nav-label">{{item.name}}</span>
          <span class="submenu-nav-actions">
              <button class="icon-btn-empty"><span class="icon icon2 icon-c-delete"></span></button>
              <button class="icon-btn-empty"><span class="icon icon2 icon-settings-gear"></span></button>
            </span>
        </a>
      </li>
    </ng-template>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScUiDrawerNavComponent implements OnInit, OnDestroy {
  @Input() subMenuItems: ScUiSubMenuItem[];
  @Input() title: string;
  @Input() sortable: string | boolean = false;

  @Output() onItemSelect = new EventEmitter<ScUiSubMenuItem>();
  @Output() onItemReorder = new EventEmitter<ScUiSubMenuItem[]>();

  dragInProgress = false;

  private subs: Subscription;

  constructor(private dndService: DragulaService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (this.sortable) {
      this.subs = new Subscription();

      this.subs.add(
        this.dndService.dropModel(this.sortable.toString()).subscribe(({targetModel}) => {
          this.onItemReorder.emit(targetModel);
        })
      );

      this.subs.add(
        this.dndService.drag(this.sortable.toString()).subscribe(() => {
          this.dragInProgress = true;
          this.cd.markForCheck();
        })
      );

      this.subs.add(
        this.dndService.drop(this.sortable.toString()).subscribe(() => {
          this.dragInProgress = false;
          this.cd.markForCheck();
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
    this.dndService.destroy(this.sortable.toString());
    this.subs.unsubscribe();
  }

  selectItem(item: ScUiSubMenuItem) {
    this.onItemSelect.emit(item);
  }
}
