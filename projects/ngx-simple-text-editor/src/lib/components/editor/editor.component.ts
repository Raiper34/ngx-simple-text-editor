import {AfterViewInit, Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BUTTONS} from '../../models/editor-buttons';
import {ToolbarItemType} from '../../models/button';

@Component({
  selector: 'st-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: EditorComponent, multi: true},
  ]
})
export class EditorComponent implements ControlValueAccessor, AfterViewInit {

  @Input() buttons = BUTTONS;
  @Input() placeholder = '';
  content = '';
  toolbarItemType = ToolbarItemType;
  @ViewChild('contentEditable') contentEditable: ElementRef;
  onChangeFn: (val: string) => void;

  constructor(@Inject(DOCUMENT) private readonly document: any) {
    this.document.onselectionchange = () => {
      if (this.document.activeElement === this.contentEditable.nativeElement) {
        this.queryCommandState();
      }
    };
  }

  writeValue(val: string): void {
    this.content = val;
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
  }

  ngAfterViewInit(): void {
    this.contentEditable.nativeElement.addEventListener(
      'input',
      () => this.onChangeFn(this.contentEditable.nativeElement.innerHTML),
      false
    );
  }

  queryCommandState(): void {
    this.buttons = this.buttons.map(item => item.type !== ToolbarItemType.Separator ? ({
      ...item,
      state: item.type === ToolbarItemType.Select || item.type === ToolbarItemType.Color ?
        this.document.queryCommandValue(String(item.command)) :
        this.document.queryCommandState(String(item.command)),
    }) : item);
  }

  execCommand(command: string, value?: any): void {
    this.contentEditable.nativeElement.focus();
    this.document.execCommand(command, false, value);
    this.queryCommandState();
  }

  prompt(command: string, text: string): void {
    const value = prompt(text);
    this.execCommand(command, value);
  }

  trackBy(_, item: any): string {
    return item.name;
  }

}
