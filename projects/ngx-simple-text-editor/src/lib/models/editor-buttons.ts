import {ExecCommand} from './exec-command';
import {ToolbarItem, ToolbarItemType} from './button';

export const BUTTONS: ToolbarItem[] = [
  {type: ToolbarItemType.Button, command: ExecCommand.undo, icon: 'fas fa-undo', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.redo, icon: 'fas fa-redo', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.removeFormat, icon: 'fas fa-remove-format', state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.bold, icon: 'fas fa-bold', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.italic, icon: 'fas fa-italic', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.underline, icon: 'fas fa-underline', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.strikeThrough, icon: 'fas fa-strikethrough', state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.justifyLeft, icon: 'fas fa-align-left', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.justifyCenter, icon: 'fas fa-align-center', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.justifyRight, icon: 'fas fa-align-right', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.justifyFull, icon: 'fas fa-align-justify', state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.insertOrderedList, icon: 'fas fa-list-ol', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.insertUnorderedList, icon: 'fas fa-list-ul', state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.indent, icon: 'fas fa-indent', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.outdent, icon: 'fas fa-outdent', state: false},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Button, command: ExecCommand.subscript, icon: 'fas fa-subscript', state: false},
  {type: ToolbarItemType.Button, command: ExecCommand.superscript, icon: 'fas fa-superscript', state: false},
  {type: ToolbarItemType.Separator},
  {
    type: ToolbarItemType.Select, command: ExecCommand.fontSize, state: 3, items: [
      {value: 1, label: '1'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '4'},
      {value: 5, label: '5'},
      {value: 6, label: '6'},
      {value: 7, label: '7'},
    ]
  },
  {type: ToolbarItemType.Color, command: ExecCommand.foreColor, icon: 'fas fa-palette', state: 'rgb(0, 0, 0)'},
  {type: ToolbarItemType.Separator},
  {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: 'fas fa-link', text: 'Create link'},
  {type: ToolbarItemType.Button, command: ExecCommand.unlink, icon: 'fas fa-unlink', state: ''},
];
