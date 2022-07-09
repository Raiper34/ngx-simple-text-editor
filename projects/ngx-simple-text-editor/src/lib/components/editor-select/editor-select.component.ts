import {Component, Input, Output, EventEmitter} from '@angular/core';
import {EditorSelect} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

@Component({
  selector: 'st-select',
  templateUrl: './editor-select.component.html',
  styleUrls: ['./editor-select.component.scss']
})
export class EditorSelectComponent {

  @Input() button: EditorSelect;
  @Input() state: string | number | boolean;
  @Output() command = new EventEmitter<{command: ExecCommand, value: string}>();

  onCommand(command: ExecCommand, value: string): void {
    this.command.emit({command, value});
  }

}
