import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorColorPickerComponent } from './editor-color-picker.component';
import {ExecCommand} from '../../models/exec-command';
import {ToolbarItemType} from '../../models/button';
import {By} from '@angular/platform-browser';

describe('EditorColorPickerComponent', () => {
  let component: EditorColorPickerComponent;
  let fixture: ComponentFixture<EditorColorPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorColorPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should convert rgb to hex', () => {
    expect(component.rgbStringToHex('rgb(255,255,255)')).toBe('#ffffff');
    expect(component.rgbStringToHex('rgb(1,255,255)')).toBe('#01ffff');
  });

  it('should emit command', () => {
    const command = ExecCommand.foreColor;
    const value = '#ffffff';
    component.command.emit = jasmine.createSpy();
    component.onCommand(command, value);

    expect(component.command.emit).toHaveBeenCalledWith({command, value});
  });

  it('should click have proper classes', () => {
    component.button = {type: ToolbarItemType.Color, command: ExecCommand.bold, icon: 'icon'};
    component.state = '#01FFFF';
    fixture.detectChanges();

    const iconElement = fixture.debugElement.query(By.css('.icon'));
    expect(iconElement).toBeTruthy();
    expect(iconElement.nativeElement.style.color).toBe('rgb(1, 255, 255)');
  });
});
