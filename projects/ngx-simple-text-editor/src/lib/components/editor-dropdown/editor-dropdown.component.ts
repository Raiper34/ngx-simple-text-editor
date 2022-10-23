import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {EditorDropdown} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

@Component({
  selector: 'st-dropdown',
  templateUrl: './editor-dropdown.component.html',
  styleUrls: ['./editor-dropdown.component.scss']
})
export class EditorDropdownComponent implements AfterViewInit {

  @ViewChild('select') selectElement: ElementRef;
  @Input() set button(val: EditorDropdown) {
    this.label = val.label;
    if (this.width) {
      this._button = val;
    } else {
      this._tempButton = val;
    }
  }
  get button(): EditorDropdown {
    return this._button;
  }
  width: number;
  label = '';
  _button: EditorDropdown;
  _tempButton: EditorDropdown; // workaround how to compute width of button before add options
  @Output() command = new EventEmitter<{ command: ExecCommand, value: string }>();

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.width = this.selectElement.nativeElement.getBoundingClientRect().width;
      this._button = this._tempButton;
    });
  }

  onCommand({value: label}: {value: string}): void {
    const {command, value} = this.button.items.find(item => item.label === label);
    this.command.emit({command, value});
  }

}
