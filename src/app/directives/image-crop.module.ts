import { Directive, ElementRef, Input, NgModule, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Directive({
  selector: '[scuiImageCropper]'
})
export class ImageCropDirective implements OnInit {

  readonly cloudImageUrl = 'https://ce850c98c.cloudimg.io';

  private mode: 'src' | 'bgImage';
  private imageUrl: string;

  @Input('scuiImageCropper')
  set setMode(value: 'src' | 'bgImage') {
    this.mode = value || 'src';
  }

  @Input() crop = '392x205';

  @Input('photoUrl')
  set setImageUrl(value: string) {
    this.imageUrl = `${this.cloudImageUrl}/crop/${this.crop}/tjpg/${value}`;
  }

  constructor(private renderer: Renderer2,
              private element: ElementRef) {
  }

  overlay = this.renderer.createElement('div');

  ngOnInit() {
    if (this.mode === 'src') {
      this.renderer.setAttribute(this.element.nativeElement, 'src', this.imageUrl);
    } else {
      this.renderer.setStyle(this.element.nativeElement, 'backgroundImage', `url(${this.imageUrl})`);
    }
  }
}

@NgModule({
  declarations: [ImageCropDirective],
  imports: [
    CommonModule
  ],
  exports: [
    ImageCropDirective
  ]
})
export class ImageCropModule {
}
