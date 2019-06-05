import { Component, OnInit } from '@angular/core';
import { ButtonListStub } from '../../../constants/button.list';
import { PillsListStub } from '../../../constants/pills.list';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScUiTabs } from '../../../interfaces';

@Component({
  selector: 'scui-start',
  templateUrl: './start.component.html',
  styleUrls: ['../../../../styles/pages/start-page.scss']
})
export class StartComponent implements OnInit {
  buttons = ButtonListStub;
  pills = PillsListStub;

  demoForm: FormGroup;
  activeTab = 0;
  projectDetailTabs: ScUiTabs[] = [
    {
      title: 'INFO'
    },
    {
      title: 'ASSETS'
    },
    {
      title: 'PUBLICATIONS'
    },
    {
      title: 'HISTORY',
      disabled: true
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.demoForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(15), Validators.email]],
      lastName: ['', [Validators.maxLength(2)]]
    });

    this.demoForm.valueChanges.subscribe((val) => {
      console.log(val);
      console.log(this.demoForm.valid);
    });
  }

}
