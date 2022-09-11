import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {EditorComponent} from './editor.component';
import {Component} from '@angular/core';
import {FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {CommandService} from '../../services/command.service';
import {UNDO_BUTTON} from '../../constants/editor-buttons';

@Component({
  selector: 'st-test-component',
  template: `
    <st-editor id="editor-1" [(ngModel)]="content" [config]="config"></st-editor>
    <st-editor id="editor-2" [(ngModel)]="content" disabled></st-editor>
  `
})
class TestComponent {
  content = '';
  config = {
    placeholder: 'placeholder'
  };
}

describe('EditorComponent', () => {
  let componentTest: TestComponent;
  let componentEditor: EditorComponent;
  let fixtureTest: ComponentFixture<TestComponent>;
  let fixtureEditor: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, EditorComponent ],
      imports: [FormsModule],
    }).compileComponents();
    TestBed.overrideComponent(EditorComponent, {
      set: {
        providers: [
          {provide: NG_VALUE_ACCESSOR, useExisting: EditorComponent, multi: true},
          {provide: CommandService, useValue: jasmine.createSpyObj({
              getQueryCommandState: {getQueryCommandState: true},
              execCommand: undefined
            })}
        ]
      }
    });
  }));
  beforeEach(() => {
    fixtureTest = TestBed.createComponent(TestComponent);
    fixtureEditor = TestBed.createComponent(EditorComponent);
    componentTest = fixtureTest.componentInstance;
    componentEditor = fixtureEditor.componentInstance;
    fixtureTest.detectChanges();
    fixtureEditor.detectChanges();
  });

  it('should create', () => {
    expect(componentEditor).toBeTruthy();
  });

  it('should update editor when model variable is updated', async(() => {
    const myValue = 'My value';
    componentTest.content = myValue;
    fixtureTest.detectChanges();
    const area = fixtureTest.debugElement.query(By.css('#editor-1'));
    fixtureTest.whenStable().then(() => expect(area.nativeElement.innerText).toBe(myValue));
  }));

  it('should be disabled when disabled state is active', async(() => {
    fixtureTest.whenStable().then(() => {
      fixtureTest.detectChanges();
      const area1 = fixtureTest.debugElement.query(By.css('#editor-1 .st-area'));
      expect(area1.nativeElement.getAttribute('contenteditable')).toBe('true');
      const area2 = fixtureTest.debugElement.query(By.css('#editor-2 .st-area'));
      expect(area2.nativeElement.getAttribute('contenteditable')).toBe('false');
    });
  }));

  it('should setup placeholder', async(() => {
    fixtureTest.whenStable().then(() => {
      const area = fixtureTest.debugElement.query(By.css('.st-area'));
      expect(area.nativeElement.getAttribute('data-placeholder')).toBe('placeholder');
    });
  }));

  it('should call getQueryCommandState', async(() => {
    componentEditor.config = {buttons: [UNDO_BUTTON]};
    fixtureEditor.detectChanges();

    componentEditor.fetchQueryCommandState();

    expect(componentEditor.queryCommandState).toEqual({getQueryCommandState: true});
  }));

  it('should call getQueryCommandState', async(() => {
    componentEditor.config = {buttons: [UNDO_BUTTON]};
    fixtureEditor.detectChanges();

    componentEditor.fetchQueryCommandState();

    expect(componentEditor.queryCommandState).toEqual({getQueryCommandState: true});
  }));

  it('should focus contentEditable and call execCommand', async(() => {
    const service = fixtureEditor.debugElement.injector.get(CommandService);
    componentEditor.config = {buttons: [UNDO_BUTTON]};
    fixtureEditor.detectChanges();

    componentEditor.contentEditable = {nativeElement: {focus: jasmine.createSpy('focus')}};
    componentEditor.execCommand('command', 'val');

    expect(componentEditor.contentEditable.nativeElement.focus).toHaveBeenCalled();
    expect(service.execCommand).toHaveBeenCalledWith('command', 'val');
    expect(service.getQueryCommandState).toHaveBeenCalled();
  }));

  it('should call onChange on dom modify', async(() => {
    const testHTML = 'Test HTML';
    componentEditor.onChangeFn = jasmine.createSpy('onChangeFn');

    componentEditor.contentEditable = undefined;
    componentEditor.domModify();
    expect(componentEditor.onChangeFn).not.toHaveBeenCalled();

    componentEditor.contentEditable = jasmine.createSpyObj('contentEditable', [], {
      nativeElement: {innerHTML: testHTML}
    });
    componentEditor.domModify();
    expect(componentEditor.onChangeFn).toHaveBeenCalledWith(testHTML);
  }));

});
