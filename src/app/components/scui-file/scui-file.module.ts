import { CommonModule } from '@angular/common';
import { MatMenuModule, MatTooltipModule } from '@angular/material';


import {
  Component,
  Input,
  OnInit,
  NgModule, Output, EventEmitter
} from '@angular/core';
import { ScUiFile } from '../../interfaces';

@Component({
  selector: 'scui-file',
  template: `
    <article [ngClass]="{overlayActive: overlayActive}" class="scui-article-status">
      <div class="icons-wrap">
        <span class="item" *ngFor="let itm of outputChannels">
          <span class="icon-wrap {{ itm.type }}"
                matTooltip="
                  {{channelsConfig[itm.type].name}}
                  {{(itm.status === statusPublished && ' has been published') || (itm.status === statusScheduled && ' is scheduled.') || (itm.status === '' && ' has not been used yet')}}"
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
                    <div class="output-action" (click)="selectFile()" mat-menu-item>
                      <span class="icon {{ file?.status === 'ARCHIVED' ? 'icon-preview' : 'icon-pen-2' }}"></span>
                      <span class="output-action-label"> {{ file?.status === 'ARCHIVED' ? 'View' : 'Edit' }}</span>
                    </div>
                    <div class="output-action" *ngIf="!file?.hasScheduledPublications; else scheduledPublication" (click)="archiveFile()" mat-menu-item>
                      <span class="icon icon-box"></span>
                      <span class="output-action-label"> {{ file?.status === 'ARCHIVED' ? 'Un-Archive' : 'Archive' }}</span>
                    </div>
                    <ng-template #scheduledPublication>
                      <div class="output-action disabled">
                        <span class="icon icon-box"></span>
                        <span class="output-action-label"> Archive</span>
                      </div>
                    </ng-template>
                    <!--                    <div class="output-action" mat-menu-item>-->
                    <!--                      <span class="icon icon-preview"></span>-->
                    <!--                      <span class="output-action-label"> View</span>-->
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
          <span class="files">Publications</span>
          <span (click)="toggleOverlay()" class="icon icon-e-remove"></span>
        </div>
        <div class="published-files-content">
          <div *ngIf="outputChannelsTotal > 0; else noResults;">
            <div *ngFor="let item of outputChannels">
              <div class="scheduled-item" *ngIf="item.status === statusScheduled">
                <span class="scheduled-item-wrap">
                  <span class="icon {{ channelsConfig[item.type].icon }}"></span>
                </span>
                <span class="date-published">{{ item.publicationDate | date: 'dd. MM. yyyy. HH:mm' }}</span>
                <span class="settings">
                  <span class="icon icon-settings-gear"></span>
                  <span class="icon icon-bin"></span>
                </span>
              </div>
              <div class="published-item" *ngIf="item.status === statusPublished">
                <span class="icon {{ channelsConfig[item.type].icon }}"></span>
                <span class="date-published">{{ item.publicationDate | date: 'dd. MM. yyyy. HH:mm' }}</span>
              </div>
            </div>
          </div>
          <ng-template #noResults>This publication has not been published on any channel.</ng-template>
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
  @Output() fileUpdate = new EventEmitter<ScUiFile>();
  outputChannelsTotal = 0;
  overlayActive: boolean;
  readonly statusPublished = 'PUBLISHED';
  readonly statusScheduled = 'SCHEDULED';

  channelsConfig = {
    TWITTER: {
      name: 'Twitter',
      icon: 'icon-twitter'
    },
    WORDPRESS: {
      name: 'Wordpress',
      icon: 'icon-wordpress'
    },
    MAILCHIMP: {
      name: 'Mailchimp',
      icon: 'icon-mc-freddie-dark'
    },
    FACEBOOK_PAGE: {
      name: 'Facebook (Page)',
      icon: 'icon-facebook-f'
    },
    LINKEDIN_PAGE: {
      name: 'LinkedIn (Page)',
      icon: 'icon-linkedin-in'
    },
    LINKEDIN_PROFILE: {
      name: 'LinkedIn (Profile)',
      icon: 'icon-linkedin-in'
    },
    GOOGLE_DOC: {
      name: 'Google Docs',
      icon: 'icon-google-drive'
    },
    SALES_FORCE: {
      name: 'Salesforce',
      icon: 'icon-salesforce-icon'
    },
    PARDOT: {
      name: 'Salesforce Pardot',
      icon: 'icon-salesforce-icon'
    },
    SCOPE_TO_EMAIL: {
      name: 'Scope To Email',
      icon: 'icon-mail-block'
    },
    HUBSPOT: {
      name: 'Hubspot',
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

  archiveFile() {
    this.fileUpdate.emit({
      ...this.file,
      status: this.file.status === 'ARCHIVED' ? 'ACTIVE' : 'ARCHIVED'
    });
  }

}

@NgModule({
  declarations: [ScUiFileComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatTooltipModule
  ],
  exports: [ScUiFileComponent]
})
export class ScUiFileModule {
}


