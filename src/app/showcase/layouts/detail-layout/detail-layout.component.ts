import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'scui-detail-layout',
  template: `
    <a (click)="goBack()"><- BACK</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class DetailLayoutComponent implements OnInit {

  constructor(private location: Location) {
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
