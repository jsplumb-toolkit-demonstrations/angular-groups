import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, NodeComponent, GroupComponent }  from './app.component';
import {DatasetComponent } from "./dataset";
import { jsPlumbToolkitModule } from "jsplumbtoolkit-angular";
import { jsPlumbToolkitDragDropModule } from "jsplumbtoolkit-angular-drop";

@NgModule({
    imports:      [ BrowserModule, jsPlumbToolkitModule, jsPlumbToolkitDragDropModule ],
    declarations: [ AppComponent, NodeComponent, GroupComponent, DatasetComponent ],
    bootstrap:    [ AppComponent ],
    entryComponents: [ NodeComponent, GroupComponent ],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { 
    constructor() { }
}
