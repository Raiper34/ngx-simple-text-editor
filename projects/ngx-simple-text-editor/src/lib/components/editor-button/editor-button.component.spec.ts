import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorButtonComponent } from './editor-button.component';
import {ToolbarItemType} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

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
    component.button = {type: ToolbarItemType.Button, command: ExecCommand.undo, icon: 'fas fa-undo', state: false};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
