import {Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

const MUTATION_OBSERVER_CONFIG = {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true
};

@Directive({
  selector: '[stDomModify]'
})
export class DomModifyDirective implements OnInit, OnDestroy {

  @Output('stDomModify') domModify = new EventEmitter();
  observer: MutationObserver;

  constructor(private readonly element: ElementRef) { }

  ngOnInit(): void {
    this.observer = new MutationObserver(() => {
      this.domModify.emit();
    });

    this.observer.observe(this.element.nativeElement, MUTATION_OBSERVER_CONFIG);
  }

  ngOnDestroy(): void {
    this.observer.disconnect();
  }

}
