import {Directive, ElementRef, EventEmitter, HostListener, Inject, Output, DOCUMENT} from '@angular/core';


@Directive({
    selector: '[stSelectionChange]',
    standalone: false
})
export class SelectionChangeDirective {

  @Output('stSelectionChange') selectionChange = new EventEmitter<void>();

  constructor(@Inject(DOCUMENT) private readonly document: Document,
              private readonly element: ElementRef) { }

  @HostListener('document:selectionchange')
  selectionchange(): void {
    if (this.document.activeElement === this.element.nativeElement) {
      this.selectionChange.emit();
    }
  }

}
