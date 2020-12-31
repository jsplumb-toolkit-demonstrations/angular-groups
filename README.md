## Angular Groups Demonstration

<a id="top"></a>

This demonstration is a clone of the Groups demo, but using the Toolkit's Angular integration, with Angular CLI. 

<a name="package"></a>

### package.json

```json
{
  "name": "jsplumb-toolkit-angular-groups",
  "version": "1.3.5",
  "license": "Commercial",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "prod-build": "ng build --prod --base-href .",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "tscr": "tsc -traceResolution",
    "tsc": "tsc"
  },
  "private": true,
  "dependencies": {
    "@angular/common": "^9.1.1",
    "@angular/compiler": "^9.1.1",
    "@angular/core": "^9.1.1",
    "@angular/forms": "^9.1.1",
    "@angular/platform-browser": "^9.1.1",
    "@angular/platform-browser-dynamic": "^9.1.1",
    "@angular/router": "^9.1.1",
    "jsplumbtoolkit": "file:../../jsplumbtoolkit.tgz",
    "jsplumbtoolkit-angular": "file:../../jsplumbtoolkit-angular.tgz",
    "jsplumbtoolkit-angular-drop": "file:../../jsplumbtoolkit-angular-drop.tgz",
    "jsplumbtoolkit-demo-support": "file:../../jsplumbtoolkit-demo-support.tgz",
    "jsplumbtoolkit-drop": "file:../../jsplumbtoolkit-drop.tgz",
    "jsplumbtoolkit-syntax-highlighter": "file:../../jsplumbtoolkit-syntax-highlighter.tgz",
    "jsplumbtoolkit-undo-redo": "file:../../jsplumbtoolkit-undo-redo.tgz",
    "core-js": "^2.4.1",
    "rxjs": "^6.5.3",
    "rxjs-compat": "^6.0.0-rc.0",
    "tslib": "^1.10.0",
    "zone.js": "~0.10.2"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.901.1",
    "@angular-devkit/schematics": "^9.1.1",
    "@angular/cli": "9.1.1",
    "@angular/compiler-cli": "^9.1.1",
    "@types/jasmine": "2.5.38",
    "@types/node": "^12.11.1",
    "codelyzer": "^5.1.2",
    "ts-node": "~2.0.0",
    "tslint": "~4.4.2",
    "typescript": "~3.8.3"
  }
}


```

There are seven entries specific to jsPlumb:

```json
{
  "jsplumbtoolkit": "file:../../jsplumbtoolkit.tgz",                            // main toolkit code
  "jsplumbtoolkit-angular": "file:../../jsplumbtoolkit-angular.tgz",            // angular integration
  "jsplumbtoolkit-angular-drop": "file:../../jsplumbtoolkit-angular-drop.tgz",  // angular drag/drop components
  "jsplumbtoolkit-demo-support": "file:../../jsplumbtoolkit-demo-support.tgz",  // support code for toolkit demos
  "jsplumbtoolkit-drop": "file:../../jsplumbtoolkit-drop.tgz",                  // drag/drop manager
  "jsplumbtoolkit-syntax-highlighter": "file:../../jsplumbtoolkit-syntax-highlighter.tgz", // used to show the current dataset
  "jsplumbtoolkit-undo-redo": "file:../../jsplumbtoolkit-undo-redo.tgz",        // undo/redo manager
}
```


[TOP](#top)

---

<a name="setup"></a>

### Page Setup

#### CSS

Angular CLI expects a CSS file to be placed at `src/styles.css`. Our `styles.css` contains
styles for the demo and also imports 3 other css files:

- `syntax-highlighter.css`     For the json dump underneath the canvas.

- `jsplumbtoolkit.css`   Provides sane defaults for the Toolkit. You should start building your app with this in the cascade; you can
remove it eventually, of course, but you just need to ensure you have provided values elsewhere in your cascade. Generally the safest thing to
do is to just include it at the top of your cascade.

- `jsplumbtoolkit-demo.css`   Some basic common styles for all the demo pages.

[TOP](#top)

---


<a name="typescript-setup"></a>

### Typescript Setup

This is the `tsconfig.json` file used by this demonstration:

```javascript
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "lib": [ "es2015", "dom" ],
    "noImplicitAny": true,
    "suppressImplicitAnyIndexErrors": true
    
  },
  "include":[ "src/**/*" ]
}
```

The two things to note here are that we use `commonjs` as the `module` type, and we have `moduleResolution` set to `node`. Both of these settings are required by jsPlumb.

[TOP](#top)

---

<a name="loading"></a>

### Data Loading

This is the data used by this demonstration:

```javascript
{
    "groups":[
        {"id":"one", "title":"Group 1", "left":100, top:50 },
        {"id":"two", "title":"Group 2", "left":450, top:250, type:"constrained"  }
    ],
    "nodes": [
        { "id": "window1", "name": "1", "left": 10, "top": 20, group:"one" },
        { "id": "window2", "name": "2", "left": 140, "top": 50, group:"one" },
        { "id": "window3", "name": "3", "left": 450, "top": 50 },
        { "id": "window4", "name": "4", "left": 110, "top": 370 },
        { "id": "window5", "name": "5", "left": 140, "top": 150, group:"one" },
        { "id": "window6", "name": "6", "left": 50, "top": 50, group:"two" },
        { "id": "window7", "name": "7", "left": 50, "top": 450 }
    ],
    "edges": [
        { "source": "window1", "target": "window3" },
        { "source": "window1", "target": "window4" },
        { "source": "window3", "target": "window5" },
        { "source": "window5", "target": "window2" },
        { "source": "window4", "target": "window6" },
        { "source": "window6", "target": "window2" }
    ]
}
```

As with Nodes, if you're using the `Absolute` layout, you can specify left/top properties for the element.

Additionally, Groups are considered to have a `type`, just like Nodes, whose default value is `default`, but which can
be overridden in the same way as that of Nodes. Here we see the Group 2 is defined to be of type `constrained`, which we
will discuss in the [View](#view) section below.

The relationship between Nodes and Groups is written into each Node's data, not into the Group data. Here we see that
4 of the Nodes in our dataset have a `group` declared.


[TOP](#top)

---

<a name="bootstrap"></a>

### Bootstrap

The application is bootstrapped inside `src/main.ts`:

```javascript
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule }              from './app.module';
import { jsPlumbToolkit } from "jsplumbtoolkit";

if (environment.production) {
    enableProdMode();
}

jsPlumbToolkit.ready(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});


```

Here, `app` is a module defined in `src/app.module.ts`:

```javascript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, NodeComponent, GroupComponent }  from './app.component';
import { ControlsComponent } from "./controls";
import {DatasetComponent } from "./dataset";
import { jsPlumbToolkitModule } from "jsplumbtoolkit-angular";
import { jsPlumbToolkitDragDropModule } from "jsplumbtoolkit-angular-drop";

@NgModule({
    imports:      [ BrowserModule, jsPlumbToolkitModule, jsPlumbToolkitDragDropModule ],
    declarations: [ AppComponent, NodeComponent, GroupComponent, ControlsComponent, DatasetComponent ],
    bootstrap:    [ AppComponent ],
    entryComponents: [ NodeComponent, GroupComponent ],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 
    constructor() { }
}


```

[TOP](#top)

---


<a name="components"></a>

### Components

The demo is written as a root level component, which itself uses components from the jsPlumb Angular module.

```
<div class="sidebar node-palette" jsplumb-surface-drop selector="li" surfaceId="demoSurface" [dataGenerator]="dataGenerator">
    <ul>
        <li *ngFor="let nodeType of draggableTypes" [attr.jtk-node-type]="nodeType.type" title="Drag to add new" [attr.jtk-group]="nodeType.group">
                {{nodeType.label}}
        </li>
    </ul>
    </div>
    <jsplumb-surface [surfaceId]="surfaceId" [toolkitId]="toolkitId" [view]="view" [renderParams]="renderParams" [nodeResolver]="nodeResolver" [toolkitParams]="toolkitParams"></jsplumb-surface>                
  <jsplumb-miniview [surfaceId]="surfaceId"></jsplumb-miniview>
<jsplumb-controls [surfaceId]="surfaceId"></jsplumb-controls>
<jsplumb-dataset [toolkitId]="toolkitId"></jsplumb-dataset>
```

There is a component for nodes: 

```
@Component({    
    templateUrl:"templates/node.html"
})
export class NodeComponent extends BaseNodeComponent {
    remove(obj:any) {
        this.toolkit.removeNode(obj);
    }
}
```

```
<div>
    <div class="name">
        <div class="delete" title="Click to delete" (click)="remove(obj)">
            <i class="fa fa-times"></i>
        </div>
        <span>{{obj.name}}</span>
    </div>
    <div class="connect"></div>
    <jtk-source filter=".connect"></jtk-source>
    <jtk-target></jtk-target>
</div>

```

and a component for groups:


```javascript
@Component({
    templateUrl:"templates/group.html"
})
export class GroupComponent extends BaseNodeComponent {

    toggleGroup(group:any) {
        this.surface.toggleGroup(group);
    }
}
```

```
<div>
    <div class="group-title">
        {{obj.title}}
        <button class="expand" (click)="toggleGroup(obj)"></button>
    </div>
    <div jtk-group-content="true"></div>
</div>
```

[TOP](#top)

---

<a name="toolkitParams"></a>

### Toolkit Parameters

The Toolkit instance is created with a `groupFactory` and a `nodeFactory`; these are the functions used when a new
Group or Node is created after the user drags something on to the canvas:

```javascript
toolkitParams = {
    groupFactory:(type:string, data:any, callback:Function) => {
        data.title = "Group " + (toolkit.getGroupCount() + 1);
        callback(data);
    },
    nodeFactory:(type:string, data:any, callback:Function) => {
        data.name = (toolkit.getNodeCount() + 1);
        callback(data);
    }
};
```

The Toolkit instance is created via a call to the jsPlumbService in `ngOnInit()`:

```javascript
constructor(private $jsplumb:jsPlumbService) {
    this.toolkitId = "demo";
    this.surfaceId = "demoSurface";
}

ngOnInit() {
    this.toolkit = this.$jsplumb.getToolkit(this.toolkitId, this.toolkitParams)
}
```

Here we see also how the jsPlumbService is injected into the component's constructor.


[TOP](#top)

---

<a name="renderParams"></a>

### Surface Parameters

Render params are declared as a member of the app component, and referenced in the `jsplumb-surface` component declaration in the demo component's template:

```javascript
renderParams = {
    layout:{
        type:"Absolute"
    },
    events: {
        canvasClick: (e:Event) => {
            this.toolkit.clearSelection();
        }
    },
    jsPlumb: {
        Anchor:"Continuous",
        Endpoint: "Blank",
        Connector: [ "StateMachine", { cssClass: "connectorClass", hoverClass: "connectorHoverClass" } ],
        PaintStyle: { strokeWidth: 1, stroke: '#89bcde' },
        HoverPaintStyle: { stroke: "orange" },
        Overlays: [
            [ "Arrow", { fill: "#09098e", width: 10, length: 10, location: 1 } ]
        ]
    },
    lassoFilter: ".controls, .controls *, .miniview, .miniview *",
    dragOptions: {
        filter: ".delete *"
    },
    consumeRightClick:false
};
```

#### layout

Parameters for the layout. Here we specify an `Absolute` layout. It is the only layout currently that supports Groups.

#### lassoFilter

This selector specifies elements on which a mousedown should not cause the selection lasso to begin. In this 
demonstration we exclude the buttons in the top left and the miniview.

#### events

We listen for a one event:

  `canvasClick` - a click somewhere on the widget's whitespace. Then we clear the Toolkit's current selection.


#### dragOptions

We define a filter for elements that should not cause a node to be dragged.

#### jsPlumb

Recall that the Surface widget is backed by an instance of jsPlumb Community Edition. This parameter sets 
the [Defaults](/community/doc/defaults.html) for that object.


[TOP](#top)

---

<a name="view"></a>

### View

```javascript
view = {
    nodes:{
        "default":{
            template:"node"
        }
    },
    groups:{
        "default":{
            template:"group",
            endpoint:"Blank",
            anchor:"Continuous",
            revert:false,
            orphan:true,
            constrain:false
        },
        constrained:{
            parent:"default",
            constrain:true
        }
    }
};

```

The single Node mapping is the most basic Node mapping possible; Nodes derive their Anchor and Endpoint definitions from
the `jsPlumb` params passed in to the [Surface parameters](#renderParams) discussed above.  

The Group mappings, though, bear a little discussion. First, the `default` Group mapping:

- *template* - ID of the template to use to render Groups of this type
- *endpoint* - Definition of the Endpoint to use for Connections to the Group when it is collapsed.
- *anchor* - Definition of the Anchor to use for Connections to the Group when it is collapsed.
- *revert* - Whether or not to revert Nodes back into the Group element if they were dropped outside.
- *orphan* - Whether or not to remove Nodes from the Group if they were dragged outside of it and dropped. In actual fact
we did not need to set `revert` to false if `orphan` is set to true, but in this demo we included all the possible flags
just for completeness.
- *constrain* - Whether or not to constrain Nodes from being dragged outside of the Group's element. 

The `constrained` Group mapping is declared to extend `default`, so it gets all of the values defined therein, but it
overrides `constrain` to be true: Nodes cannot be dragged out of the Group element for this type of Group (in this demo
we set Group 2 to be of type `constrained`, and Group 1 - and any Groups dragged on - to be of type `default`).


[TOP](#top)

---

<a name="initialisation"></a>

### Initialisation

The `ngAfterViewInit` method of the demo component looks like this:

```javascript
this.surface = this.surfaceComponent.surface;
this.toolkit = this.surface.getToolkit();
this.toolkit.load({
    data : {
        "groups":[
            {"id":"one", "title":"Group 1", "left":100, top:50 },
            {"id":"two", "title":"Group 2", "left":450, top:250, type:"constrained"  }
        ],
        "nodes": [
            { "id": "window1", "name": "1", "left": 10, "top": 20, group:"one" },
            { "id": "window2", "name": "2", "left": 140, "top": 50, group:"one" },
            { "id": "window3", "name": "3", "left": 450, "top": 50 },
            { "id": "window4", "name": "4", "left": 110, "top": 370 },
            { "id": "window5", "name": "5", "left": 140, "top": 150, group:"one" },
            { "id": "window6", "name": "6", "left": 50, "top": 50, group:"two" },
            { "id": "window7", "name": "7", "left": 50, "top": 450 }
        ],
        "edges": [
            { "source": "window1", "target": "window3" },
            { "source": "window1", "target": "window4" },
            { "source": "window3", "target": "window5" },
            { "source": "window5", "target": "window2" },
            { "source": "window4", "target": "window6" },
            { "source": "window6", "target": "window2" }
        ]
    },
    onload:() => {
        this.surface.centerContent();
        this.surface.repaintEverything();
    }
});

```

 
[TOP](#top)

---

<a name="selecting"></a>

### Selecting Nodes

Lasso selection is enabled by default on the Surface widget. To activate the lasso, click the pencil icon in the toolbar:

![Lasso Select Mode](select-lasso.png)

This is handled by the component defined in `controls.ts`.

#### Exiting Select Mode

The Surface widget automatically exits select mode once the user has selected something. In this application we also listen to clicks on the whitespace in the widget and switch back to pan mode when we detect one. This is the `events` argument to the `render` call:

```javascript
events: {
  canvasClick: (e:Event) => {
    toolkit.clearSelection();
  }
}
```

`clearSelection` clears the current selection and switches back to Pan mode.

[TOP](#top)

---

<a name="adding"></a>

### Adding New Nodes/Groups

As discussed above, a `jsplumb-surface-drop` is declared, which configures all of its child `li` elements to be droppable onto
the Surface canvas.  When a drop occurs, data for the newly dragged node is calculated by the `dataGenerator` 
function declared on the main component:

```javascript
dataGenerator(el:Element) {
    return { type: el.getAttribute("jtk-node-type") };
}
```

For a detailed discussion of this functionality, see [this page](https://docs.jsplumbtoolkit.com/toolkit/current/articles/surface-drop-manager.html).

[TOP](#top)

---

<a name="deleting"></a>

### Deleting Nodes

Clicking the **X** button deletes the current node. This button is declared in the node template:

```
<div class="delete" title="Click to delete" (click)="remove(obj)">
    <i class="fa fa-times"></i>
</div>
```

and wired up to the `remove` method of the node component:

```
remove(obj:any) {
    this.toolkit.removeNode(obj);
}
```

[TOP](#top)


---

<a name="collapsing"></a>

### Collapsing/Expanding Groups

Clicking the **-** button in this demonstration collapses a Group. It then changes to a +, which, when clicked, 
expands the Group. The button is declared in the group component's template:

```
<button class="expand" (click)="toggleGroup(obj)"></button>
```

And wired up to the `toggleGroup` method of the group component:

```
toggleGroup(group:any) {
    this.surface.toggleGroup(group);
}
```

The label of the button is changed via css: when a group is collapsed, it is assigned the CSS class `jsplumb-group-collapsed`.
 In the CSS for this demo we have these rules:
 
```css
.group-title button:after {
    content:"-";
}

.jtk-group.jtk-group-collapsed .group-title button:after {
    content:"+";
}
```

Another point to note is that the Toolkit does not take any specific action to "collapse" your Groups visually. It is left
up to you to respond to the `jsplumb-group-collapsed` class as you need to. In this demo, we simply hide the group content
area:

```css
.jtk-group.jtk-group-collapsed [jtk-group-content] {
    display:none;
}
```

[TOP](#top)



## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

