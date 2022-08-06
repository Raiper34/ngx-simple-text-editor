import { Component } from '@angular/core';
import {EditorConfig, ST_BUTTONS} from 'ngx-simple-text-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = '';
  config: EditorConfig = {
    placeholder: 'Type something...',
    buttons: ST_BUTTONS,
  };

  installationCode1 = `import {NgxSimpleTextEditorModule} from 'ngx-simple-text-editor';

@NgModule({
// ...
  imports: [
    // ...
    NgxSimpleTextEditorModule,
    // ...
  ],
// ...
})`;

  installationCode2 = `...
"styles": [
  "src/styles.scss",
  "node_modules/@fortawesome/fontawesome-free/css/all.css"
]
...`;

  usageCode1 = `<st-editor [(ngModel)]="content" [config]="config"></st-editor>`;

  usageCode2 = `import { Component } from '@angular/core';
import {EditorConfig, ST_BUTTONS} from 'ngx-simple-text-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = '';
  config: EditorConfig = {
    placeholder: 'Type something...',
    buttons: ST_BUTTONS,
  };
}`;

  usageCode3 = `import {EditorConfig, UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON} from 'ngx-simple-text-editor';
...
config: EditorConfig = {
    buttons: [UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON],
  };
...`;
}
