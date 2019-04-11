import { Component, OnInit } from '@angular/core';
import { ButtonListStub } from '../../../constants/button.list';
import { PillsListStub } from '../../../constants/pills.list';
import { DropdownItems } from '../../../constants/dropdown.items';

@Component({
  selector: 'scui-start',
  templateUrl: './start.component.html',
  styleUrls: ['../../../../styles/pages/start-page.scss']
})
export class StartComponent implements OnInit {
  buttons = ButtonListStub;
  pills = PillsListStub;
  dropdownItems = DropdownItems;

  constructor() {
  }

  ngOnInit() {
    console.log(this.pills);
  }

}
