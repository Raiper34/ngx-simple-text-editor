import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {ST_BUTTONS} from '../../constants/editor-buttons';
import {ToolbarItemType} from '../../models/button';
import {CommandService} from '../../services/command.service';
import {EditorConfig} from '../../models/config';

const DEFAULT_CONFIG: EditorConfig = {
  placeholder: '',
  buttons: ST_BUTTONS,
};

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

  @Input() set config(val: EditorConfig) {
    this._config = {...DEFAULT_CONFIG, ...(val || {})};
  }
  get config(): EditorConfig {
    return this._config;
  }
  _config: EditorConfig = DEFAULT_CONFIG;
  @ViewChild('contentEditable') contentEditable: ElementRef;
  content = '';
  toolbarItemType = ToolbarItemType;
  isDisabled = false;
  onChangeFn: (val: string) => void;
  onTouchedFn: () => void;
  queryCommandState: {[key: string]: string | number | boolean} = {};

  constructor(@Inject(DOCUMENT) private readonly document: any,
              private readonly commandService: CommandService) { }

  writeValue(val: string): void {
    this.content = val;
    if (this.contentEditable) {
      this.contentEditable.nativeElement.innerHTML = val;
    }
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  domModify(): void {
    if (this.contentEditable) {
      this.onChangeFn(this.contentEditable.nativeElement.innerHTML);
    }
  }

  execCommand(command: string, value?: any): void {
    this.contentEditable.nativeElement.focus();
    this.commandService.execCommand(command, value);
    this.fetchQueryCommandState();
  }

  fetchQueryCommandState(): void {
    this.queryCommandState = this.commandService.getQueryCommandState(this.config.buttons);
  }

  trackBy(_, item: any): string {
    return item.name;
  }

}
