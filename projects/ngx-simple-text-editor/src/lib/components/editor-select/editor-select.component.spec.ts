import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {EditorSelectComponent} from './editor-select.component';
import {ExecCommand} from '../../models/exec-command';
import {EditorSelect, ToolbarItemType} from '../../models/button';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

const BUTTON: EditorSelect = {
  type: ToolbarItemType.Select, command: ExecCommand.fontSize, items: [
    {value: '1', label: 'Option 1'},
    {value: '2', label: 'Option 2'},
    {value: '3', label: 'Option 3'},
  ]
};

describe('EditorSelectComponent', () => {
  let component: EditorSelectComponent;
  let fixture: ComponentFixture<EditorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditorSelectComponent],
      imports: [FormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSelectComponent);
    component = fixture.componentInstance;
    component.button = BUTTON;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit command', () => {
    component.command.emit = jasmine.createSpy();
    component.onCommand(ExecCommand.fontSize, 'val');

    expect(component.command.emit).toHaveBeenCalledWith({command: ExecCommand.fontSize, value: 'val'});
  });

  it('should choose option and emit command', () => {
    component.state = '1';
    component.command.emit = jasmine.createSpy();
    fixture.detectChanges();

    const selectElm = fixture.debugElement.query(By.css('select'));
    selectElm.nativeElement.value = '2';
    selectElm.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.command.emit).toHaveBeenCalledWith({command: ExecCommand.fontSize, value: '2'});
  });

  it('should preset first element from items, when state is null', () => {
    component.ngOnInit();
    fixture.detectChanges();

    expect(component.state).toBe(component.button.items[0].value);
  });
});
