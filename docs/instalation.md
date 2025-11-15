# Getting started
Installation is performed using `npm`, just pick the right version from the compatibility table.

## Compatibility
| Angular version | Ngx simple text editor version | Font awesome version |
|-----------------|--------------------------------|----------------------|
| 9 - 13          | 0.0.0 - 1.x.x                  | 5.0.0-7.x.x          |
| 14              | 2.x.x                          | 5.0.0-7.x.x          |
| 15              | 3.x.x                          | 5.0.0-7.x.x          |
| 16              | 4.x.x                          | 5.0.0-7.x.x          |
| 17 - 19         | 5.x.x                          | 5.0.0-7.x.x          |
| 20              | 6.x.x                          | 5.0.0-7.x.x          |


## Instalation

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
