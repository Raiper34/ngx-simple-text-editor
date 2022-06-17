import {ExecCommand} from './exec-command';

export enum ToolbarItemType {
  Separator,
  Button,
  Select,
  Color,
  Input
}

export interface EditorButton extends ToolbarBaseItem {
  type: ToolbarItemType.Button;
  command: ExecCommand;
  state: boolean | number | string;
  icon: string;
}

export interface EditorColor extends ToolbarBaseItem {
  type: ToolbarItemType.Color;
  command: ExecCommand;
  state: boolean | number | string;
  icon: string;
}

export interface EditorInput extends ToolbarBaseItem {
  type: ToolbarItemType.Input;
  command: ExecCommand;
  icon: string;
  text: string;
}

export interface EditorSelect extends ToolbarBaseItem {
  type: ToolbarItemType.Select;
  command: ExecCommand;
  state: boolean | number | string;
  items: { value: number | string, label: string }[];
}

export interface Separator extends ToolbarBaseItem {
  type: ToolbarItemType.Separator;
}

interface ToolbarBaseItem {
  type: ToolbarItemType;
}

export type ToolbarItem = EditorInput | EditorColor | EditorSelect | EditorButton | Separator;
