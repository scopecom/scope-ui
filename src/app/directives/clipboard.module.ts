import { Directive, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

declare let document: any;

@Directive({
  selector: '[scuiClipboard]'
})
export class ClipboardDirective {

  constructor() {
  }

  @HostListener('paste', ['$event'])
  onPaste(event) {
    event.preventDefault();

    const text = (event.originalEvent || event).clipboardData.getData('text/plain');

    document.execCommand('insertHTML', false, text);
  }
}

@NgModule({
  declarations: [ClipboardDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ClipboardDirective
  ]
})
export class ClipboardModule {
}
