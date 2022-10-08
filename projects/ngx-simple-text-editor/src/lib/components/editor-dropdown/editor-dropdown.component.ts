import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EditorDropdown} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

@Component({
  selector: 'st-dropdown',
  templateUrl: './editor-dropdown.component.html',
  styleUrls: ['./editor-dropdown.component.scss']
})
export class EditorDropdownComponent {

  @Input() button: EditorDropdown;
  @Output() command = new EventEmitter<{ command: ExecCommand, value: string }>();

  onCommand({value: label}: {value: string}): void {
    const {command, value} = this.button.items.find(item => item.label === label);
    this.command.emit({command, value});
  }

}
