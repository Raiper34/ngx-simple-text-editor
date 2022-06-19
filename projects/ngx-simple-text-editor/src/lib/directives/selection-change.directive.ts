import {Directive, ElementRef, EventEmitter, HostListener, Inject, Output} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[stSelectionChange]'
})
export class SelectionChangeDirective {

  @Output('stSelectionChange') selectionChange = new EventEmitter<void>();

  constructor(@Inject(DOCUMENT) private readonly document: any,
              private readonly element: ElementRef) { }

  @HostListener('document:selectionchange')
  selectionchange(): void {
    if (this.document.activeElement === this.element.nativeElement) {
      this.selectionChange.emit();
    }
  }

}
