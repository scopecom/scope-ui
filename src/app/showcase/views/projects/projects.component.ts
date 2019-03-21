import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../../../constants/app.menu';
import { ScUiArticle } from '../../../interfaces';
import { ArticleListStub } from '../../../constants/article.list';

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
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
