import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ToRedDirective {
  elementRef = inject(ElementRef);

  @HostListener('click')
  onClick() {
    this.elementRef.nativeElement.style.color = 'red';
  }
}
