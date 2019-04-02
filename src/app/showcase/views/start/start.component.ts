import { Component, OnInit } from '@angular/core';
import { ButtonListStub } from '../../../constants/button.list';

@Component({
  selector: 'scui-start',
  templateUrl: './start.component.html'
})
export class StartComponent implements OnInit {
  buttons = ButtonListStub;

  constructor() {
  }

  ngOnInit() {
  }

}
