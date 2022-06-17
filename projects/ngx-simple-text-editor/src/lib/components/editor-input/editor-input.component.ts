import {Component, EventEmitter, Output, Input} from '@angular/core';
import {EditorInput} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

@Component({
  selector: 'st-input',
  templateUrl: './editor-input.component.html',
  styleUrls: ['./editor-input.component.scss']
})
export class EditorInputComponent {

  @Input() button: EditorInput;
  @Output() command = new EventEmitter<{command: ExecCommand, value: string}>();

  constructor() { }

  onCommand(command: ExecCommand, value: string): void {
    this.command.emit({command, value});
  }

}
