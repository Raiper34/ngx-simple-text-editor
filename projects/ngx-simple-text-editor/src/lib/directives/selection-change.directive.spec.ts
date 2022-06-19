import { SelectionChangeDirective } from './selection-change.directive';

describe('SelectionChangeDirective', () => {

  it('should create an instance', () => {
    const directive = new SelectionChangeDirective(null, null);
    expect(directive).toBeTruthy();
  });

  it('should emit when active element and element of this directive are equal', () => {
    const nativeElement = {};
    const document = jasmine.createSpyObj('document', null, {activeElement: nativeElement});
    const element = jasmine.createSpyObj('element', null, {nativeElement});
    const directive = new SelectionChangeDirective(document, element);
    directive.selectionChange.emit = jasmine.createSpy('emit');
    directive.selectionchange();
    expect(directive.selectionChange.emit).toHaveBeenCalled();
  });

  it('should not emit when active element and element of this directive are not equal', () => {
    const document = jasmine.createSpyObj('document', null, {activeElement: {}});
    const element = jasmine.createSpyObj('element', null, {nativeElement: {}});
    const directive = new SelectionChangeDirective(document, element);
    directive.selectionChange.emit = jasmine.createSpy('emit');
    directive.selectionchange();
    expect(directive.selectionChange.emit).not.toHaveBeenCalled();
  });
});
