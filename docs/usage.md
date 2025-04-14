# Usage
You can use Ngx simple text editor as classic template driven form input or as reactive form input.
The editor has got only one `@Input` with config object, which is optional.
The config object is defined by `placeholder` and `buttons`, both are optional and can be omitted.

## Template driven forms
```html
<st-editor [(ngModel)]="content" [config]="config"></st-editor>
```
```typescript
import {Component} from '@angular/core';
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
}
```

## Reactive forms
```html
<st-editor [formControl]="contentControl" [config]="config"></st-editor>
```
```typescript
import {Component} from '@angular/core';
import {EditorConfig, ST_BUTTONS} from 'ngx-simple-text-editor';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contentControl = new FormControl('');
  config: EditorConfig = {
    placeholder: 'Type something...',
    buttons: ST_BUTTONS,
  };
}
```

## Buttons configuration
You can pass all predefined buttons with predefined order, or you can use only buttons you want with order as you want.
```typescript
import {Component} from '@angular/core';
import {EditorConfig, UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON} from 'ngx-simple-text-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  content = '';
  config: EditorConfig = {
    buttons: [UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON],
  };
}
```
