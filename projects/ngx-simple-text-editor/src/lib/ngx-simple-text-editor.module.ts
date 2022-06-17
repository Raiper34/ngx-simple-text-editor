import { NgModule } from '@angular/core';
import {EditorComponent} from './components/editor/editor.component';
import {EditorButtonComponent} from './components/editor-button/editor-button.component';
import {EditorColorPickerComponent} from './components/editor-color-picker/editor-color-picker.component';
import {EditorInputComponent} from './components/editor-input/editor-input.component';
import {EditorSelectComponent} from './components/editor-select/editor-select.component';
import {EditorSeparatorComponent} from './components/editor-separator/editor-separator.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [
    EditorComponent,
    EditorButtonComponent,
    EditorColorPickerComponent,
    EditorInputComponent,
    EditorSelectComponent,
    EditorSeparatorComponent,
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
  ]
})
export class NgxSimpleTextEditorModule { }
