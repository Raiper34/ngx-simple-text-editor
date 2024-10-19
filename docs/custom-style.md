# Custom style
The style of the editor can be customized and overridden via SCSS and `::ng-deep`. 

## Customize default font
By default, the editor uses the default font of the browser, if you want to modify the font of the editor, you can use `st-editor` element selector.
```scss
::ng-deep .st-editor-container {
  font-family: "Gill Sans", sans-serif;
  font-size: 32px;
}
```

## Customize toolbar
The toolbar can be customized using `.st-toolbar` selector.
```scss
::ng-deep .st-toolbar {
  background-color: #d3ffe2 !important;
}
```

## Customize buttons appearance
The button's appearance (e.g. size and color) can be changed using `.st-button` selector.
```scss
::ng-deep .st-toolbar-item {
  background-color: #67BA83 !important;
  color: white !important;
  padding: 8px !important;   
}
::ng-deep .st-toolbar-item.active {
  color: black !important;
  background-color: #e5ea4b !important;
}
```


## All selectors
| Selector               | Description                                      | 
|------------------------|--------------------------------------------------|
| `.st-editor-container` | Whole editor container                           |
| `.st-toolbar`          | Toolbar with the editor buttons                  |
| `.st-area`             | Area to write                                    |
| `.st-button`           | Button of editor (undo, redo, bold...)           |
| `.st-toolbar-item`     | Item of toolbar (buttons, selects...)            |
| `.st-select`           | Select box of editor (font size select)          |
| `.st-divider`          | Divider, horizontal line, between buttons groups |
| `.active`              | Active toolbar button                            |
| `.st-input-window`     | Window of input                                  |
| `.st-input-input`      | Input in input window                            |
| `.st-input-button`     | Confirm button in input window                   |
