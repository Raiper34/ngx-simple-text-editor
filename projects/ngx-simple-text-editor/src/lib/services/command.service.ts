import {Inject, Injectable} from '@angular/core';
import {
  EditorButton,
  EditorColor,
  EditorInput,
  EditorSelect,
  Separator,
  ToolbarItem,
  ToolbarItemType
} from '../models/button';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class CommandService {

  constructor(@Inject(DOCUMENT) private readonly document: any) { }

  private isCommandWithValue(item: ToolbarItem): item is (EditorSelect | EditorColor) {
    return item.type === ToolbarItemType.Select || item.type === ToolbarItemType.Color;
  }

  private isCommandWithState(item: ToolbarItem): item is EditorButton {
    return item.type === ToolbarItemType.Button;
  }

  getQueryCommandState(buttons: ToolbarItem[]): {[key: string]: string | number | boolean} {
    return buttons
      .filter(item => this.isCommandWithValue(item) || this.isCommandWithState(item))
      .reduce((acc, curr: (EditorSelect | EditorColor | EditorButton)) => ({
        ...acc,
        [curr.command]: this.isCommandWithValue(curr) ?
          this.document.queryCommandValue(String(curr.command)) :
          this.document.queryCommandState(String(curr.command)),
      }), {});
  }

  execCommand(command: string, value?: any): void {
    this.document.execCommand(command, false, value ? String(value) : value);
  }
}
