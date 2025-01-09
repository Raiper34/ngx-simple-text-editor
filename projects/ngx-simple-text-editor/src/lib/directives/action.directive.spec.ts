import { ActionDirective } from './action.directive';

describe('ActionDirective', () => {

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('should stop/prevent event and NOT emit action on enter down', () => {
    const directive = new ActionDirective();
    directive.action.emit = jasmine.createSpy();
    const event = jasmine.createSpyObj(['preventDefault', 'stopPropagation']);

    directive.enterDown(event);

    expect(directive.action.emit).not.toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should stop/prevent event and emit action on enter up', () => {
    const directive = new ActionDirective();
    directive.action.emit = jasmine.createSpy();
    const event = jasmine.createSpyObj(['preventDefault', 'stopPropagation']);

    directive.enterUp(event);

    expect(directive.action.emit).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });

  it('should stop/prevent event and emit action on click', () => {
    const directive = new ActionDirective();
    directive.action.emit = jasmine.createSpy();
    const event = jasmine.createSpyObj(['preventDefault', 'stopPropagation']);

    directive.click(event);

    expect(directive.action.emit).toHaveBeenCalled();
    expect(event.preventDefault).toHaveBeenCalled();
    expect(event.stopPropagation).toHaveBeenCalled();
  });
});
