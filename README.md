# jsPlumb Toolkit Angular 4 CLI

The scaffold of this project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1, and the
jsPlumb bits were dropped in.

## jsPlumb 

### Application Component

The app.component.ts file contains the demo component. You can read all about it in the Angular demo documentation.

### Typescript integration

This is in `src/app/jsplumbtoolkit-angular.ts`. Note that it is currently a separate file from the .tgz containing the
core Toolkit code. We are looking at ways of packaging the raw Typescript for delivery in a .tgz.

### package.json

```
"jsplumbtoolkit": "file:../../jsplumbtoolkit.tgz",
"jsplumbtoolkittypes":"file:../../types/jsplumbtoolkit",
"jsplumbtypes":"file:../../types/jsplumb"
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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
