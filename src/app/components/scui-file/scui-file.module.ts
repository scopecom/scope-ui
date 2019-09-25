import {CommonModule} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';

import {
  Component,
  Input,
  OnInit,
  NgModule, Output, EventEmitter
} from '@angular/core';
import {ScUiFile} from '../../interfaces';

@Component({
  selector: 'scui-file',
  template: `
    <article [ngClass]="{overlayActive: overlayActive}" class="scui-article-status">
      <div class="icons-wrap">
        <span class="item" *ngFor="let itm of outputChannels">
          <span class="icon-wrap {{ itm.type }}"
                [ngClass]="{scheduled:itm.status === statusScheduled, published:itm.status === statusPublished,
                 defaultState: itm.status !== statusPublished && itm.status !== statusScheduled}">
            <span class="icon {{ channelsConfig[itm.type].icon }}"></span>
                      <span *ngIf="itm.status === statusPublished || itm.status === statusScheduled" class="dot"></span>
          </span>
        </span>
      </div>
      <div class="info-wrap">
        <div class="info-top">
          <div (click)="selectFile()" class="info-author">{{ author }}</div>
          <div (click)="selectFile()" class="info-title">{{ file?.title }}</div>
        </div>
        <div class="info-bottom">
          <span (click)="toggleOverlay()" class="counter">
            <span>{{ outputChannelsTotal }}</span>
          </span>
          <span>
            <span [matMenuTriggerFor]="menu" class="icon icon-menu-ham-horz menu-trigger"></span>
                  <mat-menu class="output-actions" #menu="matMenu">
                    <div class="output-action" (click)="selectFile()"  mat-menu-item>
                      <span class="icon icon-pen-2"></span>
                      <span class="output-action-label"> Edit</span>
                    </div>
<!--                    <div class="output-action" mat-menu-item>-->
<!--                      <span class="icon icon-preview"></span>-->
<!--                      <span class="output-action-label"> View</span>-->
<!--                    </div>-->
<!--                    <div class="output-action" mat-menu-item>-->
<!--                      <span class="icon icon-box"></span>-->
<!--                      <span class="output-action-label"> Archive</span>-->
<!--                    </div>-->
<!--                    <div class="output-action" mat-menu-item>-->
<!--                      <span class="icon icon-send"></span>-->
<!--                      <span class="output-action-label"> Publish</span>-->
<!--                    </div>-->
<!--                    <div class="output-action output-action-last" mat-menu-item>-->
<!--                      <span class="icon icon-bin"></span>-->
<!--                      <span class="output-action-label"> Delete</span>-->
<!--                    </div>-->
                  </mat-menu>
          </span>
        </div>
      </div>
      <div class="published-overlay">
        <div class="published-files-header">
          <span class="files">Published Files</span>
          <span (click)="toggleOverlay()" class="icon icon-e-remove"></span>
        </div>
        <div class="published-files-content">
          <div *ngFor="let item of outputChannels">
            <div class="scheduled-item" *ngIf="item.status === statusScheduled">
              <span class="scheduled-item-wrap">
                <span class="icon {{ channelsConfig[item.type].icon }}"></span>
              </span>
              <span class="date-published">{{ item.datePublished }}</span>
              <span class="time-published">{{ item.timePublished }}</span>
              <span class="settings">
                <span class="icon icon-settings-gear"></span>
                <span class="icon icon-bin"></span>
              </span>
            </div>
            <div class="published-item" *ngIf="item.status === statusPublished">
              <span class="icon {{ channelsConfig[item.type].icon }}"></span>
              <span class="date-published">{{ item.datePublished }}</span>
              <span class="time-published">{{ item.timePublished }}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  `,
})
export class ScUiFileComponent implements OnInit {

  @Input() author: string;
  @Input() file: ScUiFile;
  @Input() outputChannels: any;
  @Output() fileSelect = new EventEmitter<ScUiFile>();
  outputChannelsTotal = 0;
  overlayActive: boolean;
  readonly statusPublished = 'PUBLISHED';
  readonly statusScheduled = 'SCHEDULED';

  channelsConfig = {
    TWITTER: {
      icon: 'icon-twitter'
    },
    WORDPRESS: {
      icon: 'icon-wordpress'
    },
    MAILCHIMP: {
      icon: 'icon-mc-freddie-dark'
    },
    FACEBOOK_PAGE: {
      icon: 'icon-facebook-f'
    },
    LINKEDIN_PAGE: {
      icon: 'icon-linkedin-in'
    },
    // LINKEDIN_PROFILE: {
    //   icon: ''
    // },
    GOOGLE_DOC: {
      icon: 'icon-google-drive'
    },
    SALES_FORCE: {
      icon: 'icon-typo3'
    },
    SCOPE_TO_EMAIL: {
      icon: 'icon-mail-block'
    },
    HUBSPOT: {
      icon: 'icon-HubSpot'
    },
  };

  constructor() {
  }

  ngOnInit() {
    if (this.outputChannels) {
      const activeChannels = this.outputChannels.filter(val => val.status === this.statusPublished || val.status === this.statusScheduled);
      if (activeChannels && activeChannels.length) {
        this.outputChannelsTotal = activeChannels.length;
      }
    }
  }

  toggleOverlay() {
    this.overlayActive = !this.overlayActive;
  }

  selectFile() {
    this.fileSelect.emit(this.file);
  }

}

@NgModule({
  declarations: [ScUiFileComponent],
  imports: [
    CommonModule,
    MatMenuModule
  ],
  exports: [ScUiFileComponent]
})
export class ScUiFileModule {
}


