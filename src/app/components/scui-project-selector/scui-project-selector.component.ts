import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ScUiOption} from '../../interfaces';

@Component({
  selector: 'scui-project-selector',
  template: `
    <div class="scui-project-selector">
      <div [ngClass]="{'dropdown-expanded': isOpen}" class="scui-dropdown">
        <div (click)="toggle()" class="main">{{ selectedOption.label }}
          <span *ngIf="!isOpen" class="icon icon-small-down"></span>
          <span *ngIf="isOpen" class="icon icon-small-up"></span>
        </div>
        <div *ngIf="isOpen" [ngClass]="{'no-items':options.length <= 1}" class="options">
          <div (click)="toggle();selectOption(option);"
               class="option"
               [ngClass]="{hidden:option.id === selectedOption.id}"
               *ngFor="let option of options">
            <span>{{ option.label }}</span>
          </div>
        </div>
      </div>
      <div class="selected-projects" *ngFor="let project of assignedProjects; let i = index">
        <span class="icon icon-app-store"></span>
        <span class="project-label">{{ project.label }}</span>
        <span (click)="removeProject(project)" class="icon icon-i-remove"></span>
      </div>
    </div>`,
})
export class ScUiProjectSelectorComponent implements OnInit {
  @Input() options: ScUiOption[];
  @Input() selectedOption: ScUiOption;
  @Input() defaultOption: ScUiOption = {
    label: 'Select Project',
    id: 0
  };
  @Output() onSelectedOption = new EventEmitter<ScUiOption>();
  @Output() onremovedOption = new EventEmitter<ScUiOption>();

  isOpen: boolean;
  assignedProjects: ScUiOption[] = [];

  constructor() {
  }

  ngOnInit() {
    this.selectedOption = this.selectedOption || this.options[0];
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  removeProject(option: ScUiOption) {
    this.assignedProjects = this.assignedProjects.filter(item => option.id !== item.id);
    this.options.push(option);
    this.onSelectedOption.emit(option);
  }

  selectOption(option) {
    this.selectedOption = option;
    this.onSelectedOption.emit(this.selectedOption);
    this.assignedProjects.push(option);
    this.options = this.options.filter(item => option.id !== item.id);
    this.selectedOption = this.defaultOption;
    this.onSelectedOption.emit(option);
  }

}
