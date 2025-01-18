import { NgModelChangeDebouncedDirective } from './ng-model-change-debounced.directive';
import {from, of} from "rxjs";
import {NgModel} from "@angular/forms";
import {fakeAsync, flush} from "@angular/core/testing";

describe('NgModelChangeDebouncedDirective', () => {

  it('should create an instance', () => {
    const ngModel = {control: {valueChanges: of()}} as NgModel;

    const directive = new NgModelChangeDebouncedDirective(ngModel);

    expect(directive).toBeTruthy();
  });

  it('should emit debounced ngChange event', fakeAsync(() => {
    const ngModel = {control: {valueChanges: from([null, '1', '2'])}} as NgModel;
    const directive = new NgModelChangeDebouncedDirective(ngModel);
    directive.stNgModelChangeDebounced.emit = jasmine.createSpy();

    directive.ngOnInit();

    expect(directive.stNgModelChangeDebounced.emit).toHaveBeenCalledWith('2');
    flush();
  }));

  it('should unsubscribe from ngModel', () => {
    const unsubscribe = jasmine.createSpy();
    const observable = {subscribe: () => ({unsubscribe})};
    const ngModel = {control: {valueChanges: {pipe: () =>  observable}}} as unknown as NgModel;
    const directive = new NgModelChangeDebouncedDirective(ngModel);
    directive.ngOnInit();

    directive.ngOnDestroy();

    expect(unsubscribe).toHaveBeenCalled();
  });
});
