import {Component, Input, Output, EventEmitter} from '@angular/core';
import {EditorColor} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

const DEFAULT_COLOR = '#000000';

@Component({
  selector: 'st-color-picker',
  templateUrl: './editor-color-picker.component.html',
  styleUrls: ['./editor-color-picker.component.scss']
})
export class EditorColorPickerComponent {

  @Input() button: EditorColor;
  @Input() state: string | number | boolean;
  @Output() command = new EventEmitter<{command: ExecCommand, value: string}>();

  onCommand(command: ExecCommand, value: string): void {
    this.command.emit({command, value});
  }

  rgbStringToHex(rgb: string | boolean | number): string {
    const match = String(rgb).match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return !match ? DEFAULT_COLOR : '#' + [match[1], match[2], match[3]].map(x => {
      const hex = Number(x).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  }

}
