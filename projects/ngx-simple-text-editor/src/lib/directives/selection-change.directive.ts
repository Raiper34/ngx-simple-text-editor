import {Directive, ElementRef, EventEmitter, Inject, Output} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[stSelectionChange]'
})
export class SelectionChangeDirective {

  @Output('stSelectionChange') selectionChange = new EventEmitter<void>();

  constructor(@Inject(DOCUMENT) private readonly document: any,
              private readonly element: ElementRef) {
    if (this.document) {
      this.document.onselectionchange = () => {
        if (this.document.activeElement === element.nativeElement) {
          this.selectionChange.next();
        }
      };
    }
  }

}
