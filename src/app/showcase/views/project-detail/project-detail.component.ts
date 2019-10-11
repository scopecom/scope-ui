import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppMenu, AppMenuFooter, AppMenuLogo, WizardMenu } from '../../../constants/app.menu';
import { ArticleListStub } from '../../../constants/article.list';

@Component({
  selector: 'scui-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectDetailComponent implements OnInit {
  logo = AppMenuLogo;
  footer = AppMenuFooter;
  menuItems = AppMenu;
  openImportArticle = false;
  articles = ArticleListStub;

  wizardMenu = WizardMenu;

  constructor() {
  }

  ngOnInit() {
  }

}
