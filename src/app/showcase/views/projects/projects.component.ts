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
      description: 'General-Anzeiger Bonn: Kersten Köhler löst Hans Homrighausen als Geschäftsführer ab',
      url: 'http://google.com',
      date: '01/27/2019',
      photoUrl: 'https://d2i72ju5buk5xz.cloudfront.net/gsc/Y7NGF5/16/0a/8b/160a8b978424423f9ed542cd25abea6b/images/discover/p0.jpg?token=c924c0e928b3753fcf29e9acb198333a'
    },
    {
      title: 'Kress News',
      description: 'General-Anzeiger Bonn: Kersten Köhler löst Hans Homrighausen als Geschäftsführer ab',
      url: 'http://google.com',
      date: '01/27/2019',
      photoUrl: 'https://d2i72ju5buk5xz.cloudfront.net/gsc/Y7NGF5/16/0a/8b/160a8b978424423f9ed542cd25abea6b/images/discover/p0.jpg?token=c924c0e928b3753fcf29e9acb198333a'
    },
    {
      title: 'Kress News',
      description: 'General-Anzeiger Bonn: Kersten Köhler löst Hans Homrighausen als Geschäftsführer ab',
      url: 'http://google.com',
      date: '01/27/2019',
      photoUrl: 'https://d2i72ju5buk5xz.cloudfront.net/gsc/Y7NGF5/16/0a/8b/160a8b978424423f9ed542cd25abea6b/images/discover/p0.jpg?token=c924c0e928b3753fcf29e9acb198333a'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
