import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ST_BUTTONS} from '../../constants/editor-buttons';
import {ToolbarItem, ToolbarItemType} from '../../models/button';
import {CommandService} from '../../services/command.service';

@Component({
  selector: 'st-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: EditorComponent, multi: true},
    CommandService
  ]
})
export class EditorComponent implements ControlValueAccessor {

  @Input() buttons = ST_BUTTONS;
  @Input() placeholder = '';
  @ViewChild('contentEditable') contentEditable: ElementRef;
  content = '';
  toolbarItemType = ToolbarItemType;
  onChangeFn: (val: string) => void;

  constructor(@Inject(DOCUMENT) private readonly document: any,
              private readonly commandService: CommandService) { }

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

  domModify(): void {
    if (this.contentEditable) {
      this.onChangeFn(this.contentEditable.nativeElement.innerHTML);
    }
  }

  execCommand(command: string, value?: any): void {
    this.contentEditable.nativeElement.focus();
    this.commandService.execCommand(command, value);
    this.queryCommandState();
  }

  queryCommandState(): void {
    this.buttons = this.commandService.queryCommandState(this.buttons);
  }

  trackBy(_, item: any): string {
    return item.name;
  }

}
