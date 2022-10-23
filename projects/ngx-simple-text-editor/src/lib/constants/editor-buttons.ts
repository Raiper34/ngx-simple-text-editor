import {ExecCommand} from '../models/exec-command';
import {
  EditorButton,
  EditorColor,
  EditorDropdown,
  EditorInput,
  EditorSelect,
  Separator,
  ToolbarItem,
  ToolbarItemType
} from '../models/button';

export const UNDO_BUTTON: EditorButton = {type: ToolbarItemType.Button, command: ExecCommand.undo, icon: 'fas fa-undo', title: 'undo'};
export const REDO_BUTTON: EditorButton = {type: ToolbarItemType.Button, command: ExecCommand.redo, icon: 'fas fa-redo', title: 'redo'};
export const REMOVE_FORMAT_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.removeFormat, icon: 'fas fa-remove-format', title: 'remove format'};
export const SEPARATOR: Separator = {type: ToolbarItemType.Separator};
export const BOLD_BUTTON: EditorButton = {type: ToolbarItemType.Button, command: ExecCommand.bold, icon: 'fas fa-bold', title: 'bold'};
export const ITALIC_BUTTON: EditorButton = {type: ToolbarItemType.Button, command: ExecCommand.italic, icon: 'fas fa-italic', title: 'italic'};
export const UNDERLINE_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.underline, icon: 'fas fa-underline', title: 'underline'};
export const STRIKE_THROUGH_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.strikeThrough, icon: 'fas fa-strikethrough', title: 'strikethrough'};
export const JUSTIFY_LEFT_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.justifyLeft, icon: 'fas fa-align-left', title: 'align left'};
export const JUSTIFY_CENTER_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.justifyCenter, icon: 'fas fa-align-center', title: 'align center'};
export const JUSTIFY_RIGHT_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.justifyRight, icon: 'fas fa-align-right', title: 'align right'};
export const JUSTIFY_FULL_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.justifyFull, icon: 'fas fa-align-justify', title: 'align justify'};
export const ORDERED_LIST_BUTTON: EditorButton =
    {type: ToolbarItemType.Button, command: ExecCommand.insertOrderedList, icon: 'fas fa-list-ol', title: 'ordered list'};
export const UNORDERED_LIST_BUTTON: EditorButton =
    {type: ToolbarItemType.Button, command: ExecCommand.insertUnorderedList, icon: 'fas fa-list-ul', title: 'unordered list'};
export const INDENT_BUTTON: EditorButton = {type: ToolbarItemType.Button, command: ExecCommand.indent, icon: 'fas fa-indent', title: 'indent'};
export const OUTDENT_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.outdent, icon: 'fas fa-outdent', title: 'outdent'};
export const SUBSCRIPT_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.subscript, icon: 'fas fa-subscript', title: 'subscript'};
export const SUPERSCRIPT_BUTTON: EditorButton =
  {type: ToolbarItemType.Button, command: ExecCommand.superscript, icon: 'fas fa-superscript', title: 'superscript'};
export const FONT_SIZE_SELECT: EditorSelect = {
  type: ToolbarItemType.Select, command: ExecCommand.fontSize, title: 'font size', items: [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'},
  ]
};
export const LINK_INPUT: EditorInput =
  {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: 'fas fa-link', text: 'Create link', title: 'create link', label: 'Create link'};
export const UNLINK_BUTTON: EditorButton = {type: ToolbarItemType.Button, command: ExecCommand.unlink, icon: 'fas fa-unlink', title: 'unlink'};
export const FORE_COLOR: EditorColor =
  {type: ToolbarItemType.Color, command: ExecCommand.foreColor, icon: 'fas fa-palette', title: 'font color'};
export const IMAGE_INPUT: EditorInput =
  {type: ToolbarItemType.Input, command: ExecCommand.insertImage, icon: 'fas fa-image', text: 'Add image', title: 'add image', label: 'Create image from link'};
export const CUSTOM: EditorDropdown = {
  type: ToolbarItemType.Dropdown, label: 'Custom', title: 'test custom', items: [
    {command: ExecCommand.insertHTML, value: '<b>This is bold<b>', label: 'Custom bold text'},
    {command: ExecCommand.italic, value: null, label: 'Make Italic'},
  ]
};

export const ST_BUTTONS: ToolbarItem[] = [
  UNDO_BUTTON,
  REDO_BUTTON,
  REMOVE_FORMAT_BUTTON,
  SEPARATOR,
  BOLD_BUTTON,
  ITALIC_BUTTON,
  UNDERLINE_BUTTON,
  STRIKE_THROUGH_BUTTON,
  SEPARATOR,
  JUSTIFY_LEFT_BUTTON,
  JUSTIFY_CENTER_BUTTON,
  JUSTIFY_RIGHT_BUTTON,
  JUSTIFY_FULL_BUTTON,
  SEPARATOR,
  ORDERED_LIST_BUTTON,
  UNORDERED_LIST_BUTTON,
  SEPARATOR,
  INDENT_BUTTON,
  OUTDENT_BUTTON,
  SEPARATOR,
  SUBSCRIPT_BUTTON,
  SUPERSCRIPT_BUTTON,
  SEPARATOR,
  FONT_SIZE_SELECT,
  LINK_INPUT,
  UNLINK_BUTTON,
  SEPARATOR,
  IMAGE_INPUT,
  FORE_COLOR,
];
