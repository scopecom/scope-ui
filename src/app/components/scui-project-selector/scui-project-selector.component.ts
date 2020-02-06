import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { ScUiOption } from '../../interfaces';

@Component({
  selector: 'scui-project-selector',
  template: `
    <div class="scui-project-selector">
      <div class="scui-project-selector-label" *ngIf="label">
        {{label}}
      </div>
      <div [ngClass]="{'dropdown-expanded': isOpen}" class="scui-dropdown" (blur)="onBlurMethod()" tabindex="0">
        <div (click)="toggle()" class="main">{{ placeholder }}
          <span *ngIf="!isOpen" class="icon icon-small-down"></span>
          <span *ngIf="isOpen" class="icon icon-small-up"></span>
        </div>
        <div *ngIf="isOpen" [ngClass]="{'no-items':optionList.length === 0}" class="options">
          <div (click)="selectOption(option);"
               class="option"
               *ngFor="let option of optionList">
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
export class ScUiProjectSelectorComponent implements OnChanges {
  @Input() options: ScUiOption[];
  @Input() selectedOptionIds: number[] = [];
  @Input() label: string;
  @Input() placeholder = 'Select Project';
  @Output() onSelectedOption = new EventEmitter<ScUiOption[]>();
  @Output() onRemovedOption = new EventEmitter<ScUiOption[]>();

  isOpen: boolean;
  optionList: ScUiOption[] = [];
  assignedProjects: ScUiOption[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.options) {
      this.optionList = changes.options.currentValue.filter(option => !this.selectedOptionIds.includes(option.id));
      this.assignedProjects = changes.options.currentValue.filter(option => this.selectedOptionIds.includes(option.id));
    } else if (changes.selectedOptionIds) {
      this.optionList = this.options.filter(option => !changes.selectedOptionIds.currentValue.includes(option.id));
      this.assignedProjects = this.options.filter(option => changes.selectedOptionIds.currentValue.includes(option.id));
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  onBlurMethod() {
    this.isOpen = false;
  }

  removeProject(option: ScUiOption) {
    this.assignedProjects = this.assignedProjects.filter(item => option.id !== item.id);
    this.optionList.push(option);
    this.onSelectedOption.emit(this.assignedProjects);
  }

  selectOption(option: ScUiOption) {
    this.assignedProjects.push(option);
    this.optionList = this.optionList.filter(item => option.id !== item.id);
    this.onSelectedOption.emit(this.assignedProjects);
    this.toggle();
  }

}
