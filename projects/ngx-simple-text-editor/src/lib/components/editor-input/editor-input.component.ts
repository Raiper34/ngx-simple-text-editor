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
  @Input() state: string | number | boolean;
  @Output() command = new EventEmitter<{command: ExecCommand, value: string}>();

  onCommand(command: ExecCommand): void {
    const value = prompt(this.button.text);
    this.command.emit({command, value});
  }

}
