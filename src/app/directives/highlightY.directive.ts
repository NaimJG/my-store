import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightY]'
})
export class HighlightYDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.backgroundColor= 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.backgroundColor= '';
  }

  constructor(
    private element: ElementRef
  ) {
    // this.element.nativeElement.style.backgroundColor= 'red';
  }

}
