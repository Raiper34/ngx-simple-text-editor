import {Inject, Injectable} from '@angular/core';
import {EditorColor, EditorInput, EditorSelect, Separator, ToolbarItem, ToolbarItemType} from '../models/button';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class CommandService {

  constructor(@Inject(DOCUMENT) private readonly document: any) { }

  private isCommandWithValue(item: ToolbarItem): item is (EditorSelect | EditorColor) {
    return item.type === ToolbarItemType.Select || item.type === ToolbarItemType.Color;
  }

  private isCommandWithoutValueOrState(item: ToolbarItem): item is (Separator | EditorInput) {
    return item.type === ToolbarItemType.Separator || item.type === ToolbarItemType.Input;
  }

  queryCommandState(buttons: ToolbarItem[]): ToolbarItem[] {
    return buttons.map(item => this.isCommandWithoutValueOrState(item) ? item : ({
      ...item,
      state: this.isCommandWithValue(item) ?
        this.document.queryCommandValue(String(item.command)) :
        this.document.queryCommandState(String(item.command)),
    })) as ToolbarItem[];
  }

  execCommand(command: string, value?: any): void {
    this.document.execCommand(command, false, value ? String(value) : value);
  }
}
