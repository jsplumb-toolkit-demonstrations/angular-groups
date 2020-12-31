# jsPlumb Toolkit Angular Groups Demonstration

This is a demonstration of using groups with the Toolkit's Angular integration.

The scaffold of this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1, and the
jsPlumb bits were dropped in.

## jsPlumb 

### Application Component

The app.component.ts file contains the demo component. You can read all about it in the Angular demo documentation.

### package.json

These Toolkit packages are used by this demonstration - you will need to copy in either your licensed packages or your evaluation packages before you run `npm install`.

```
"jsplumbtoolkit-angular": "file:./jsplumbtoolkit-angular.tgz",
"jsplumbtoolkit-angular-drop": "file:./jsplumbtoolkit-angular-drop.tgz",
"jsplumbtoolkit-demo-support": "file:./jsplumbtoolkit-demo-support.tgz",
"jsplumbtoolkit-drop": "file:./jsplumbtoolkit-drop.tgz",
"jsplumbtoolkit-syntax-highlighter": "file:./jsplumbtoolkit-syntax-highlighter.tgz",
"jsplumbtoolkit-undo-redo": "file:./jsplumbtoolkit-undo-redo.tgz",
```

### CSS

Three CSS files are added as imports to `styles.css`:

- jsplumbtoolkit-syntax-highlighter.css     For the json dump underneath the canvas.

- jsplumbtoolkit.css   Provides sane defaults for the Toolkit. You should start building your app with this in the cascade; you can
remove it eventually, of course, but you just need to ensure you have provided values elsewhere in your cascade. Generally the safest thing to
do is to just include it at the top of your cascade.

- jsplumbtoolkit-demo-support.css   Some basic common styles for all the demo pages.



## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

