# Custom buttons
Defining custom buttons is really simple, you just need to create a new constant and pass it into the `buttons` property of the editor config.
The constant needs to consist of at least `type`, which is basically a type of button that will be rendered on the UI and `command`, which is an action, that will be performed.
You can use a predefined ExecCommand enum for command definition.
If you want to read more about exec commands, you can read [here](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand).
Other required properties are derived from the given type, and interfaces for all button types can be found [here](https://github.com/Raiper34/ngx-simple-text-editor/blob/main/projects/ngx-simple-text-editor/src/lib/models/button.ts).

For example, we can create our own custom button that adds preformatted and predefined strings into the editor.
We need to define a new button type of `EditorDropdown` because we want to pick one string from many and add it to the editor config
```typescript
import {EditorConfig, ExecCommand, Separator, ST_BUTTONS, ToolbarItemType} from 'ngx-simple-text-editor';

export const CUSTOM: EditorDropdown = {
  type: ToolbarItemType.Dropdown, label: 'Custom', title: 'test custom', items: [
    {command: ExecCommand.insertHTML, value: '<b>This is bold<b>', label: 'Custom bold text'},
    {command: ExecCommand.italic, value: null, label: 'Make Italic'},
  ]
};

...
config: EditorConfig = {
  buttons: [...ST_BUTTONS, Separator, CUSTOM],
};
...
```

## Button type
Button type is a simple clickable button to perform some action.
For example, you can turn on/off bold, italic, or insert something inside a block of text.
```ts
import {EditorButton, ExecCommand, ToolbarItemType} from 'ngx-simple-text-editor';

export const BOLD_BUTTON: EditorButton = {
  type: ToolbarItemType.Button,
  command: ExecCommand.bold,
  icon: 'fas fa-bold',
  title: 'bold',
};
```

## Color type
Color type is a button that shows the color picker, pick color and perform action with the picked color.
For example, you can change a background color or color of a text. 

```ts
import {EditorColor, ExecCommand, ToolbarItemType} from 'ngx-simple-text-editor';

export const FORE_COLOR: EditorColor = {
  type: ToolbarItemType.Color,
  command: ExecCommand.foreColor,
  icon: 'fas fa-palette',
  title: 'font color',
};
```

## Input type
Input type is a button to perform action with user-defined input.
For example, you can insert a link or image into HTML with a user-provided url.
You can also use the transform function to transform user input into the desired format.
For example, you can change all `http` urls to `https` (see commented line in example).
```ts
import {EditorInput, ExecCommand, ToolbarItemType} from 'ngx-simple-text-editor';

export const IMAGE_INPUT: EditorInput = {
  type: ToolbarItemType.Input,
  command: ExecCommand.insertImage,
  icon: 'fas fa-image',
  text: 'Add image',
  title: 'add image',
  label: 'Create image from link',
  // transform: (val: string) => val.replace('http', 'https'),
};
```

## Select type
Select type is a select button to perform an action with predefined inputs.
For example, you can set a font size from predefined font sizes (see `items` property).
```ts
import {EditorSelect, ExecCommand, ToolbarItemType} from 'ngx-simple-text-editor';

export const FONT_SIZE_SELECT: EditorSelect = {
  type: ToolbarItemType.Select,
  command: ExecCommand.fontSize,
  title: 'font size',
  items: [
    {value: 1, label: '1'},
    {value: 2, label: '2'},
    {value: 3, label: '3'},
    {value: 4, label: '4'},
    {value: 5, label: '5'},
    {value: 6, label: '6'},
    {value: 7, label: '7'},
  ],
};
```

## Dropdown type
Dropdown type is a dropdown button to pick and perform various actions.
Each item in a menu (see `items`) has got own `command` thus can perform different action. 
For example, you can have an item that inserts HTML into the editor and also item in the same menu that perform italic command.
```ts
import {EditorDropdown, ExecCommand, ToolbarItemType} from 'ngx-simple-text-editor';

export const CUSTOM: EditorDropdown = {
  type: ToolbarItemType.Dropdown,
  label: 'Custom',
  title: 'test custom',
  items: [
    {
      command: ExecCommand.insertHTML,
      value: '<b>This is bold<b>',
      label: 'Custom bold text',
    },
    {
      command: ExecCommand.italic,
      value: null,
      label: 'Make Italic',
    },
  ],
};
```
