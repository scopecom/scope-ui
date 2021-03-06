import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnInit,
  NgModule
} from '@angular/core';

@Component({
  selector: 'scui-pill',
  template: `
    <br>
    <span class="pill {{cssClass}}">{{ label }}</span>
  `,
})
export class ScUiPillComponent implements OnInit {
  @Input() label: string;
  @Input() cssClass: string;

  constructor() {
  }

  ngOnInit() {
  }

}


@NgModule({
  declarations: [ScUiPillComponent],
  imports: [
    CommonModule
  ],
  exports: [ScUiPillComponent]
})
export class ScUiPillsModule {
}


