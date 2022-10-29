import {Component, EventEmitter, Output, Input, HostListener, ElementRef, ViewChild} from '@angular/core';
import {EditorInput} from '../../models/button';
import {ExecCommand} from '../../models/exec-command';

const APPROX_WIDTH_THRESHOLD = 278;
const MARGIN_OFFSET = -150;

@Component({
  selector: 'st-input',
  templateUrl: './editor-input.component.html',
  styleUrls: ['./editor-input.component.scss']
})
export class EditorInputComponent {

  @Input() button: EditorInput;
  @Input() state: string | number | boolean;
  @Output() command = new EventEmitter<{ command: ExecCommand, value: string }>();
  @ViewChild('input', {static: false}) inputElement: ElementRef;
  @ViewChild('window', {static: false}) windowElement: ElementRef;
  showInputWindow = false;
  value = '';
  margin = 0; // workaround fox window width computing
  opacity = 0; // workaround fox window width computing

  constructor(private readonly element: ElementRef) {
  }

  onCommand(): void {
    if (this.value) {
      this.closeInputWindow();
      this.command.emit({
        command: this.button.command,
        value: this.button.transform ? this.button.transform(this.value) : this.value
      });
      this.value = '';
    }
  }

  openInputWindow(): void {
    this.showInputWindow = true;
    setTimeout(() => {
      this.margin = this.windowElement.nativeElement.getBoundingClientRect().width < APPROX_WIDTH_THRESHOLD ? MARGIN_OFFSET : 0;
      this.opacity = 1;
      this.inputElement.nativeElement.focus();
    });
  }

  closeInputWindow(): void {
    this.showInputWindow = false;
    this.margin = 0;
    this.opacity = 0;
  }

  @HostListener('document:click', ['$event'])
  outsideClick($event: MouseEvent): void {
    if (!this.element.nativeElement.contains($event.target) && this.showInputWindow) {
      this.closeInputWindow();
    }
  }

}
