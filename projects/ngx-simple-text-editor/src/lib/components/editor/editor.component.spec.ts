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
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, EditorComponent ],
      imports: [FormsModule],
    });
    TestBed.overrideComponent(EditorComponent, {
      set: {
        providers: [
          {provide: NG_VALUE_ACCESSOR, useExisting: EditorComponent, multi: true},
          {provide: CommandService, useValue: jasmine.createSpyObj({getQueryCommandState: {getQueryCommandState: true}})}
        ]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update editor when model variable is updated', async(() => {
    const myValue = 'My value';
    component.content = myValue;
    fixture.detectChanges();
    const area = fixture.debugElement.query(By.css('#editor-1'));
    fixture.whenStable().then(() => expect(area.nativeElement.innerText).toBe(myValue));
  }));

  it('should be disabled when disabled state is active', async(() => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      const area1 = fixture.debugElement.query(By.css('#editor-1 .st-area'));
      expect(area1.nativeElement.getAttribute('contenteditable')).toBe('true');
      const area2 = fixture.debugElement.query(By.css('#editor-2 .st-area'));
      expect(area2.nativeElement.getAttribute('contenteditable')).toBe('false');
    });
  }));

  it('should setup placeholder', async(() => {
    fixture.whenStable().then(() => {
      const area = fixture.debugElement.query(By.css('.st-area'));
      expect(area.nativeElement.getAttribute('data-placeholder')).toBe('placeholder');
    });
  }));

  it('should call getQueryCommandState', async(() => {
    const localFixture = TestBed.createComponent(EditorComponent);
    const localComponent = localFixture.componentInstance;
    localComponent.config = {buttons: [UNDO_BUTTON]};
    localFixture.detectChanges();

    localComponent.fetchQueryCommandState();
    expect(localComponent.queryCommandState).toEqual({getQueryCommandState: true});
  }));

});
