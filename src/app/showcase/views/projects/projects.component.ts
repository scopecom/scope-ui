import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SubmenuStub1, SubmenuStub2 } from '../../../constants/submenu';

@Component({
  selector: 'scui-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  submenu = SubmenuStub1;

  submenu2 = SubmenuStub2;

  filterisActive_1 = false;
  filterisActive_2 = false;

  constructor() {
  }

  ngOnInit() {
  }

  activateFilter1() {
    this.filterisActive_1 = !this.filterisActive_1;
  }

  activateFilter2() {
    this.filterisActive_2 = !this.filterisActive_2;
  }

  activateClass(item) {
    item.active = !item.active;
  }

  reorder(event) {
    console.log(event);
  }
}
