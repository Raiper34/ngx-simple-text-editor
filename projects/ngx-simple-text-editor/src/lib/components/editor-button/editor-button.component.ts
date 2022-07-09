import {Component, Input, EventEmitter, Output} from '@angular/core';
import {EditorButton} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

@Component({
  selector: 'st-button',
  templateUrl: './editor-button.component.html',
  styleUrls: ['./editor-button.component.scss']
})
export class EditorButtonComponent {

  @Input() button: EditorButton;
  @Input() state: string | number | boolean;
  @Output() command = new EventEmitter<ExecCommand>();

  onCommand(command: ExecCommand): void {
    this.command.emit(command);
  }

}
