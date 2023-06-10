// myDirective.directive.ts
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[myDirective]',
})
export class ToRedDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click')
  onClick() {
    this.elementRef.nativeElement.style.color = 'red';
  }
}
