import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {EditorSelect} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

@Component({
  selector: 'st-select',
  templateUrl: './editor-select.component.html',
  styleUrls: ['./editor-select.component.scss']
})
export class EditorSelectComponent implements OnInit {

  @Input() button: EditorSelect;
  @Input() state: string | number | boolean;
  @Output() command = new EventEmitter<{command: ExecCommand, value: string}>();

  ngOnInit(): void {
    if (!this.state && this.button.items.length) {
      this.state = this.button.items[0].value;
    }
  }

  onCommand(command: ExecCommand, value: string): void {
    this.command.emit({command, value});
  }

}
