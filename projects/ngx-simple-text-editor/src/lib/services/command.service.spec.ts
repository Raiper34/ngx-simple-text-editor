import { CommandService } from './command.service';
import {ExecCommand} from '../models/exec-command';
import {ToolbarItem, ToolbarItemType} from '../models/button';

const BUTTONS: ToolbarItem[] = [
  {type: ToolbarItemType.Button, command: ExecCommand.undo, icon: 'fas fa-undo'},
  {type: ToolbarItemType.Separator},
  {
    type: ToolbarItemType.Select, command: ExecCommand.fontSize, items: [
      {value: 1, label: '1'},
      {value: 2, label: '2'},
      {value: 3, label: '3'},
      {value: 4, label: '4'},
      {value: 5, label: '5'},
      {value: 6, label: '6'},
      {value: 7, label: '7'},
    ]
  },
  {type: ToolbarItemType.Input, command: ExecCommand.createLink, icon: 'fas fa-link', text: 'Create link'},
  {type: ToolbarItemType.Color, command: ExecCommand.foreColor, icon: 'fas fa-palette'},
];

describe('CommandService', () => {
  let service: CommandService;
  let document: Document;

  beforeEach(() => {
    document = jasmine.createSpyObj({
      execCommand: undefined,
      queryCommandValue: 'val',
      queryCommandState: true,
    });
    service = new CommandService(document);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should exec command with value', () => {
    service.execCommand(ExecCommand.fontSize, 3);
    expect(document.execCommand).toHaveBeenCalledWith(String(ExecCommand.fontSize), false, String(3));
  });

  it('should exec command without value', () => {
    service.execCommand(ExecCommand.fontSize);
    expect(document.execCommand).toHaveBeenCalledWith(String(ExecCommand.fontSize), false, undefined);
  });

  it('should query command state', () => {
    const states = service.getQueryCommandState(BUTTONS);
    expect(states).toEqual({
      [ExecCommand.undo]: true,
      [ExecCommand.fontSize]: 'val',
      [ExecCommand.foreColor]: 'val',
    });
  });
});
