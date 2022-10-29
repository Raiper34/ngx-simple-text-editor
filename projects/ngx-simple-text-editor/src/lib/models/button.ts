import {ExecCommand} from './exec-command';

export enum ToolbarItemType {
  Separator,
  Button,
  Select,
  Color,
  Input,
  Dropdown,
}

export interface EditorButton extends ToolbarBaseItem {
  type: ToolbarItemType.Button;
  command: ExecCommand;
  icon: string;
  title?: string;
}

export interface EditorColor extends ToolbarBaseItem {
  type: ToolbarItemType.Color;
  command: ExecCommand;
  icon: string;
  title?: string;
}

export interface EditorInput extends ToolbarBaseItem {
  type: ToolbarItemType.Input;
  command: ExecCommand;
  icon: string;
  text: string;
  title?: string;
  label?: string;
  transform?: (val: string) => string;
}

export interface EditorSelect extends ToolbarBaseItem {
  type: ToolbarItemType.Select;
  command: ExecCommand;
  items: { value: number | string, label: string }[];
  title?: string;
}

export interface EditorDropdown extends ToolbarBaseItem {
  type: ToolbarItemType.Dropdown;
  label: string;
  items: { command: ExecCommand, value: string, label: string }[];
  title?: string;
}

export interface Separator extends ToolbarBaseItem {
  type: ToolbarItemType.Separator;
}

interface ToolbarBaseItem {
  type: ToolbarItemType;
}

export type ToolbarItem = EditorDropdown | EditorInput | EditorColor | EditorSelect | EditorButton | Separator;
