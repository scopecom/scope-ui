import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'scui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() disabled = false;
  @Output() onClick = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
  }

}
