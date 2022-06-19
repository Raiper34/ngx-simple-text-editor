import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[stDomModify]'
})
export class DomModifyDirective {

  @Output('stDomModify') domModify = new EventEmitter();

  @HostListener('DOMSubtreeModified')
  onDomModify(): void {
    this.domModify.emit();
  }


}
