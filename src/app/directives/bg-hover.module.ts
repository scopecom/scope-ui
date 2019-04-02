import { Directive, ElementRef, Renderer2, HostListener, OnInit, NgModule, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[scuiBgHover]'
})
export class BgHoverDirective implements OnInit {

  private bgColor: string;

  @Input('scuiBgHover')
  set setBgColor(value: string ) {
    this.bgColor = value || '#2f00f3';
  }

  constructor(private renderer: Renderer2,
              private hostElement: ElementRef) {
  }

  overlay = this.renderer.createElement('div');

  @HostListener('mouseover') hoverMe() {
    this.renderer.setStyle(this.overlay, 'width', '100%');

  }

  @HostListener('mouseleave') leaveMe() {
    this.renderer.setStyle(this.overlay, 'width', '0');
  }

  ngOnInit() {
    this.renderer.setStyle(this.hostElement.nativeElement, 'position', 'relative');
    this.renderer.setAttribute(this.overlay, 'class', 'scui-overlay');
    this.renderer.setStyle(this.overlay, 'width', '0');
    this.renderer.setStyle(this.overlay, 'background-color', this.bgColor);
    this.renderer.appendChild(this.hostElement.nativeElement, this.overlay);
  }
}

@NgModule({
  declarations: [BgHoverDirective],
  imports: [CommonModule],
  exports: [BgHoverDirective]
})
export class BgHoverModule {
}
