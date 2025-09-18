import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectivas]'
})
export class DirectivasDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onmouseenter() {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
  }
  @HostListener('mouseleave')
  onmouseleave() {
    this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
  }
}
