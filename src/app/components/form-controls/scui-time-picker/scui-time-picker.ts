import {Component, Input} from '@angular/core';

@Component({
  selector: 'scui-time-picker',
  template: `
    <div class="scui-time-picker">
      <timepicker [(ngModel)]="model"></timepicker>
    </div>
  `,
})
export class ScUiTimePickerComponent {

  @Input() model = new Date();

}
