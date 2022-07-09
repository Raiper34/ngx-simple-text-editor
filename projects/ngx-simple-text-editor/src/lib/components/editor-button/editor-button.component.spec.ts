import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorButtonComponent } from './editor-button.component';
import {ToolbarItemType} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';
import {By} from '@angular/platform-browser';

describe('WysiwygEditorButtonComponent', () => {
  let component: EditorButtonComponent;
  let fixture: ComponentFixture<EditorButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.button = {type: ToolbarItemType.Button, command: ExecCommand.undo, icon: 'icon'};
    component.state = false;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should emit command', () => {
    component.command.emit = jasmine.createSpy();
    component.onCommand(ExecCommand.bold);

    expect(component.command.emit).toHaveBeenCalledWith(ExecCommand.bold);
  });

  it('should click button and emit command', () => {
    component.button = {type: ToolbarItemType.Button, command: ExecCommand.bold, icon: 'icon'};
    component.state = false;
    component.command.emit = jasmine.createSpy();
    const element = fixture.debugElement.query(By.css('button'));
    element.nativeElement.click();

    expect(component.command.emit).toHaveBeenCalledWith(ExecCommand.bold);
  });

  it('should click have proper classes', () => {
    component.button = {type: ToolbarItemType.Button, command: ExecCommand.bold, icon: 'icon'};
    component.state = false;
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('.icon'));
    expect(iconElement).toBeTruthy();

    const buttonActive = fixture.debugElement.query(By.css('.active'));
    expect(buttonActive).toBeFalsy();

    component.button = {...component.button};
    component.state = true;
    fixture.detectChanges();
    const buttonActive2 = fixture.debugElement.query(By.css('.active'));
    expect(buttonActive2).toBeTruthy();
  });
});
