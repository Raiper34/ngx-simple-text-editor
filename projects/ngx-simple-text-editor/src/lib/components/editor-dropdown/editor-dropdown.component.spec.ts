import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditorDropdownComponent } from './editor-dropdown.component';
import {FormsModule} from '@angular/forms';
import {EditorDropdown, ToolbarItemType} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';
import {By} from '@angular/platform-browser';

const BUTTON: EditorDropdown = {
  type: ToolbarItemType.Dropdown, label: 'Dropdown', items: [
    {command: ExecCommand.insertHTML, value: '<b>Custom1</b>', label: 'Custom1'},
    {command: ExecCommand.insertHTML, value: '<b>Custom2</b>', label: 'Custom2'},
    {command: ExecCommand.insertHTML, value: '<b>Custom3</b>', label: 'Custom3'}
  ]
};

describe('EditorDropdownComponent', () => {
  let component: EditorDropdownComponent;
  let fixture: ComponentFixture<EditorDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorDropdownComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should choose option, emit command and lable need to stay same', (done) => {
    component.button = BUTTON;
    component.command.emit = jasmine.createSpy();
    component.ngAfterViewInit();

    setTimeout(() => {
      fixture.detectChanges();
      const selectElm = fixture.debugElement.query(By.css('select'));
      selectElm.nativeElement.value = 'Custom2';
      selectElm.nativeElement.dispatchEvent(new Event('change'));
      fixture.detectChanges();

      expect(component.command.emit).toHaveBeenCalledWith({command: ExecCommand.insertHTML, value: '<b>Custom2</b>'});
      expect(selectElm.nativeElement.value).toBe('');
      done();
    });
  });

  it('should compute width', (done) => {
    const selectWidthBeforeOptions =
      fixture.debugElement.query(By.css('select')).nativeElement.getBoundingClientRect().width;
    component.button = BUTTON;
    component.ngAfterViewInit();
    setTimeout(() => {
      fixture.detectChanges();
      const selectWidthAfterOptions =
        fixture.debugElement.query(By.css('select')).nativeElement.getBoundingClientRect().width;
      expect(selectWidthBeforeOptions).toBe(selectWidthAfterOptions);
      done();
    });
  });

  it('should modify buttons when width is set', () => {
    component.width = 100;
    component.button = BUTTON;
    expect(component.button).toEqual(BUTTON);
  });
});
