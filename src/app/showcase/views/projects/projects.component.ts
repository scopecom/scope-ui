import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'scui-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  submenu = [
    {
      name: 'Kampagne expovina',
      id: 1
    },
    {
      name: 'Sales - Product Update',
      id: 2
    },
    {
      name: 'Intern 03/19',
      id: 3
    }
  ];

  submenu2 = [
    {
      name: 'Company Project 1',
      id: 1
    },
    {
      name: 'Company Project 2',
      id: 2
    },
    {
      name: 'Company Project 3',
      id: 3
    }
  ];

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

}
