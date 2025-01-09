import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[stAction]',
})
export class ActionDirective {

  @Output('stAction') action = new EventEmitter<KeyboardEvent | MouseEvent>();

  @HostListener('keydown.enter', ['$event'])
  enterDown(event: KeyboardEvent) {
    this.stopEvent(event);
  }

  @HostListener('keyup.enter', ['$event'])
  enterUp(event: KeyboardEvent) {
    this.performAction(event);
  }

  @HostListener('click', ['$event'])
  click(event: MouseEvent): void {
    this.performAction(event);
  }

  private stopEvent(event: KeyboardEvent | MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  private performAction(event: KeyboardEvent | MouseEvent): void {
    this.stopEvent(event);
    this.action.emit(event);
  }

}
