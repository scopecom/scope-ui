export interface ScUiMenuItem {
  name: string;
  route: string;
  external?: boolean;
  iconClass?: string;
  cssClass?: string;
}

export interface ScUiSubMenuItem {
  id?: any;
  name?: string;
  cssClass?: string;
  iconClass?: string;
  active?: boolean;
  routerLink?: string;
  [t: string]: any;
}

export interface ScUiTabs {
  title: string;
  disabled?: boolean;
  routerLink?: string;
  [t: string]: any;
}
