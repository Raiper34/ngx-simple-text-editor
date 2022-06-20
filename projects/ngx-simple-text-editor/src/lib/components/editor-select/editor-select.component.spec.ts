import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {EditorSelectComponent} from './editor-select.component';
import {ExecCommand} from '../../models/exec-command';
import {ToolbarItemType} from '../../models/button';
import {By} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

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
    component.button = {
      type: ToolbarItemType.Select, command: ExecCommand.fontSize, state: '1', items: [
        {value: '1', label: 'Option 1'},
        {value: '2', label: 'Option 2'},
        {value: '3', label: 'Option 3'},
      ]
    };
    component.command.emit = jasmine.createSpy();
    fixture.detectChanges();

    const selectElm = fixture.debugElement.query(By.css('select'));
    selectElm.nativeElement.value = '2';
    selectElm.nativeElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    expect(component.command.emit).toHaveBeenCalledWith({command: ExecCommand.fontSize, value: '2'});
  });
});
