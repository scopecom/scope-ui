import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ScUiOption} from '../../interfaces';

@Component({
  selector: 'scui-project-selector',
  template: `
    <div class="scui-project-selector">
      <div [ngClass]="{'dropdown-expanded': isOpen}" class="scui-dropdown">
        <div (click)="toggle()" class="main">{{ placeholder }}
          <span *ngIf="!isOpen" class="icon icon-small-down"></span>
          <span *ngIf="isOpen" class="icon icon-small-up"></span>
        </div>
        <div *ngIf="isOpen" [ngClass]="{'no-items':options.length === 0}" class="options">
          <div (click)="selectOption(option);"
               class="option"
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
export class ScUiProjectSelectorComponent {
  @Input() options: ScUiOption[];
  @Input() placeholder = 'Select Project';
  @Output() onSelectedOption = new EventEmitter<ScUiOption[]>();
  @Output() onRemovedOption = new EventEmitter<ScUiOption[]>();
  isOpen: boolean;
  assignedProjects: ScUiOption[] = [];

  toggle() {
    this.isOpen = !this.isOpen;
  }

  removeProject(option: ScUiOption) {
    this.assignedProjects = this.assignedProjects.filter(item => option.id !== item.id);
    this.options.push(option);
    this.onSelectedOption.emit(this.assignedProjects);
  }

  selectOption(option: ScUiOption) {
    this.assignedProjects.push(option);
    this.options = this.options.filter(item => option.id !== item.id);
    this.onSelectedOption.emit(this.assignedProjects);
    this.toggle();
  }

}
