import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {EditorSelect} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

@Component({
  selector: 'st-select',
  templateUrl: './editor-select.component.html',
  styleUrls: ['./editor-select.component.scss']
})
export class EditorSelectComponent implements OnInit {

  @Input() button: EditorSelect;
  @Output() command = new EventEmitter<{command: ExecCommand, value: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onCommand(command: ExecCommand, value: string): void {
    this.command.emit({command, value});
  }

}
