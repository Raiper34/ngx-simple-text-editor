import {Directive, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NgModel} from "@angular/forms";
import {Subscription} from "rxjs";
import {debounceTime, distinctUntilChanged, skip} from "rxjs/operators";

const DEBOUNCE_TIME_MS = 100;

@Directive({
  selector: '[stNgModelChangeDebounced]',
})
export class NgModelChangeDebouncedDirective implements OnInit, OnDestroy {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Output() stNgModelChangeDebounced = new EventEmitter<any>();
  private subscription: Subscription;

  constructor(private readonly ngModel: NgModel) {}

  ngOnInit(): void {
    this.subscription = this.ngModel.control.valueChanges.pipe(
      skip(1),
      distinctUntilChanged(),
      debounceTime(DEBOUNCE_TIME_MS)
    ).subscribe((value) => this.stNgModelChangeDebounced.emit(value));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
