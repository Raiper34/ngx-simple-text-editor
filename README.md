[![npm version](https://badge.fury.io/js/ngx-simple-text-editor.svg)](https://badge.fury.io/js/ngx-simple-text-editor)
[![CircleCI](https://circleci.com/gh/Raiper34/ngx-simple-text-editor.svg?style=shield)](https://circleci.com/gh/Raiper34/ngx-simple-text-editor)
[![Coverage Status](https://coveralls.io/repos/github/Raiper34/ngx-simple-text-editor/badge.svg?branch=main)](https://coveralls.io/github/Raiper34/ngx-simple-text-editor?branch=main)
[![GitHub issues](https://img.shields.io/github/issues/Raiper34/ngx-simple-text-editor)](https://github.com/Raiper34/ngx-simple-text-editor/issues)
![npm bundle size](https://img.shields.io/bundlephobia/min/ngx-simple-text-editor)
![NPM](https://img.shields.io/npm/l/ngx-simple-text-editor)
[![demo](https://badgen.net/badge/demo/online/orange)](https://ngx-simple-text-editor.netlify.app/)

![ngc simple text editor logo](logo.svg)
# Ngx Simple Text editor
Ngx Simple Text editor or ST editor is a simple native text editor component for Angular 9+. 

## Version compatibility
| Angular version | Ngx simple text editor version | Font awesome version |
|-----------------|--------------------------------|----------------------|
| 9 - 13          | 0.0.0 - 1.x.x                  | 5.0.0-6.x.x          |
| 14              | 2.x.x                          | 5.0.0-6.x.x          |
| 15              | 3.x.x                          | 5.0.0-6.x.x          |

# Instalation

`npm install ngx-simple-text-editor --save`

then add `NgxSimpleTextEditorModule` into module imports
```typescript
import {NgxSimpleTextEditorModule} from 'ngx-simple-text-editor';

@NgModule({
// ...
  imports: [
    // ...
    NgxSimpleTextEditorModule,
    // ...
  ],
// ...
})
```
If you want to use default button icons, you must install Font awesome. 
`npm install @fortawesome/fontawesome-free` and declare in styles in angular.json
```json
...
"styles": [
  "src/styles.scss",
  "node_modules/@fortawesome/fontawesome-free/css/all.css"
]
...
```

# Usage
You can use Ngx simple text editor as classic template-driven form input or as reactive form input.
```angular2html
<st-editor [(ngModel)]="content" [config]="config"></st-editor>
```
The editor has got only one @Input with config object, which is optional.
The config object is defined by placeholder and buttons, both are optional and can be omitted.  
```typescript
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
}
```
You can pass all predefined buttons with predefined order, or you can use only buttons you want with order as you want.
```typescript
import {EditorConfig, UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON} from 'ngx-simple-text-editor';
...
config: EditorConfig = {
    buttons: [UNDO_BUTTON, SEPARATOR, BOLD_BUTTON, ITALIC_BUTTON],
  };
...
```

# Demo
[Online demo](https://ngx-simple-text-editor.netlify.app/)
or Stackblitz coming soon.

# License
MIT
