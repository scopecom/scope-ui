import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'scui-detail-layout',
  template: `
    <router-outlet></router-outlet>
  `
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
