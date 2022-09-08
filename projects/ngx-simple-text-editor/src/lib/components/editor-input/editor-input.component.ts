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
  showInputWindow = false;
  value = '';

  onCommand(): void {
    if (this.value) {
      this.toggleInputVisibility();
      this.command.emit({command: this.button.command, value: this.value});
      this.value = '';
    }
  }

  toggleInputVisibility(): void {
    this.showInputWindow = !this.showInputWindow;
  }

}
