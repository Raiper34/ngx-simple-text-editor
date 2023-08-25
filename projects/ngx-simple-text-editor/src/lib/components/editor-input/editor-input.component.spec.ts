import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorInputComponent } from './editor-input.component';
import {ToolbarItemType} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';
import {EditorButtonComponent} from '../editor-button/editor-button.component';

describe('EditorInputComponent', () => {
  let component: EditorInputComponent;
  let fixture: ComponentFixture<EditorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorInputComponent, EditorButtonComponent ]
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

  it('should show toggle input window visibility', (done) => {
    component.openInputWindow();
    fixture.detectChanges();
    expect(component.showInputWindow).toBeTrue();
    setTimeout(() => {
      expect(component.opacity).toBe(1);
      component.closeInputWindow();
      expect(component.showInputWindow).toBeFalse();
      expect(component.opacity).toBe(0);
      done();
    });
  });

  it('should emit command when value is defined', () => {
    const command = ExecCommand.createLink;
    const value = 'www.example.com';
    component.value = value;
    component.showInputWindow = true;
    component.command.emit = jasmine.createSpy('emit');
    component.button = {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: 'link', text: 'Url'};

    component.onCommand();

    expect(component.showInputWindow).toBeFalse();
    expect(component.value).toBe('');
    expect(component.command.emit).toHaveBeenCalledWith({command, value});
  });

  it('should not emit command when value is undefined', () => {
    component.value = '';
    component.showInputWindow = true;
    component.command.emit = jasmine.createSpy('emit');
    component.button = {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: 'link', text: 'Url'};

    component.onCommand();

    expect(component.showInputWindow).toBeTrue();
    expect(component.value).toBe('');
    expect(component.command.emit).not.toHaveBeenCalled();
  });

  it('should emit command with transformed value when transform method is defined', () => {
    const command = ExecCommand.createLink;
    component.value = 'www.example.com';
    component.command.emit = jasmine.createSpy('emit');
    component.button = {
      type: ToolbarItemType.Input,
      command: ExecCommand.createLink,
      icon: 'link',
      text: 'Url',
      transform: (val: string) => val.replace('www', 'http://www')
    };

    component.onCommand();

    expect(component.command.emit).toHaveBeenCalledWith({command, value: 'http://www.example.com'});
  });

  it('should close window when click outside', (done) => {
    component.openInputWindow();
    fixture.detectChanges();
    setTimeout(() => {
      component.outsideClick(jasmine.createSpyObj({}, {target: document}));
      expect(component.showInputWindow).toBeFalse();
      done();
    });
  });

  it('should NOT close window when click inside', (done) => {
    component.openInputWindow();
    fixture.detectChanges();
    setTimeout(() => {
      component.outsideClick(jasmine.createSpyObj({}, {target: component.inputElement.nativeElement}));
      expect(component.showInputWindow).toBeTrue();
      done();
    });
  });

  it('should calculate proper position based on width', (done) => {
    component.openInputWindow();
    fixture.detectChanges();
    component.windowElement.nativeElement.style.width = '100px';
    setTimeout(() => {
      expect(component.margin).toBe(-150);
      done();
    });
  });

  it('should store selection and restore', (done) => {
    component.value = 'www.example.com';
    component.button = {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: 'link', text: 'Url'};

    expect(component.selectionRange).not.toBeNull();

    component.openInputWindow();
    fixture.detectChanges();
    setTimeout(() => {
      component.onCommand();
      expect(component.selectionRange).toBeNull();
      done();
    });
  });

});
