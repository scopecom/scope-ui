import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppMenu, AppMenuFooter, AppMenuLogo } from '../../../constants/app.menu';
import { ScUiArticle } from '../../../interfaces';

@Component({
  selector: 'scui-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsComponent implements OnInit {
  logo = AppMenuLogo;
  footer = AppMenuFooter;
  menuItems = AppMenu;
  openImportArticle = false;
  articles: ScUiArticle[] = [
    {
      title: 'Kress News',
      description: 'Headline',
      url: 'http://google.com',
      date: '01/27/2019',
      photoUrl: 'https://corporate.thescope.com/hs-fs/hubfs/homepage-images/discovery.png?width=336&name=discovery.png',
      mode: 'default',
    },
    {
      title: 'Kress News',
      description: 'Headline',
      url: 'http://google.com',
      date: '01/27/2019',
      photoUrl: 'https://corporate.thescope.com/hs-fs/hubfs/homepage-images/discovery.png?width=336&name=discovery.png',
      mode: 'edit',
    },
    {
      title: 'Kress News',
      description: 'Headline',
      url: 'http://google.com',
      date: '01/27/2019',
      photoUrl: 'https://corporate.thescope.com/hs-fs/hubfs/homepage-images/discovery.png?width=336&name=discovery.png',
      mode: 'delete',
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
