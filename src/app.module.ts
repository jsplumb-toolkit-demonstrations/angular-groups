import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent, NodeComponent, GroupComponent }  from './app.component'
import { jsPlumbToolkitModule } from '@jsplumbtoolkit/browser-ui-angular'
import { jsPlumbToolkitDragDropModule } from '@jsplumbtoolkit/browser-ui-angular-drop'

@NgModule({
    imports: [BrowserModule, jsPlumbToolkitModule, jsPlumbToolkitDragDropModule],
    declarations: [AppComponent, NodeComponent, GroupComponent],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { 
    constructor() { }
}
