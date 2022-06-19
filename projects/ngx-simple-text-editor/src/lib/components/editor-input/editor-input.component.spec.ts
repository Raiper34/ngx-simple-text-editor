import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorInputComponent } from './editor-input.component';
import {ToolbarItemType} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

describe('EditorInputComponent', () => {
  let component: EditorInputComponent;
  let fixture: ComponentFixture<EditorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.button = {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: 'link', text: 'Url'};
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should emit command and prompt value', () => {
    const promptValue = 'www.example.com';
    const command = ExecCommand.createLink;

    window.prompt = jasmine.createSpy('prompt').and.returnValue(promptValue);
    component.command.emit = jasmine.createSpy('emit');
    component.button = {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: 'link', text: 'Url'};

    component.onCommand(command);
    expect(component.command.emit).toHaveBeenCalledWith({command, value: promptValue});
  });
});
