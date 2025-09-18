import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSubRayar]'
})
export class SubRayarDirective {
  @Input() appSubRayar: string='';
  constructor(private el:ElementRef, private renderer:Renderer2) { }
  @HostListener('mouseenter') onEnter(){
    this.renderer.setStyle(this.el.nativeElement, 'textDecoration', this.appSubRayar)
  }
  @HostListener('mouseleave') onLeave(){
    this.renderer.removeStyle(this.el.nativeElement, 'textDecoration')
  }
}
