import {Inject, Injectable} from '@angular/core';
import {ToolbarItem, ToolbarItemType} from '../models/button';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class CommandService {

  constructor(@Inject(DOCUMENT) private readonly document: any) { }

  queryCommandState(buttons: ToolbarItem[]): ToolbarItem[] {
    return buttons.map(item => item.type !== ToolbarItemType.Separator ? ({
      ...item,
      state: item.type === ToolbarItemType.Select || item.type === ToolbarItemType.Color ?
        this.document.queryCommandValue(String(item.command)) :
        this.document.queryCommandState(String(item.command)),
    }) : item);
  }

  execCommand(command: string, value?: any): void {
    this.document.execCommand(command, false, value);
  }
}
