import { NgModule } from '@angular/core';
import {EditorComponent} from './components/editor/editor.component';
import {EditorButtonComponent} from './components/editor-button/editor-button.component';
import {EditorColorPickerComponent} from './components/editor-color-picker/editor-color-picker.component';
import {EditorInputComponent} from './components/editor-input/editor-input.component';
import {EditorSelectComponent} from './components/editor-select/editor-select.component';
import {EditorSeparatorComponent} from './components/editor-separator/editor-separator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { DomModifyDirective } from './directives/dom-modify.directive';
import { SelectionChangeDirective } from './directives/selection-change.directive';
import { EditorDropdownComponent } from './components/editor-dropdown/editor-dropdown.component';



@NgModule({
  declarations: [
    EditorComponent,
    EditorButtonComponent,
    EditorColorPickerComponent,
    EditorInputComponent,
    EditorSelectComponent,
    EditorSeparatorComponent,
    DomModifyDirective,
    SelectionChangeDirective,
    EditorDropdownComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditorComponent,
    EditorButtonComponent,
    EditorColorPickerComponent,
    EditorInputComponent,
    EditorSelectComponent,
    EditorSeparatorComponent,
    EditorDropdownComponent,
  ]
})
export class NgxSimpleTextEditorModule { }
