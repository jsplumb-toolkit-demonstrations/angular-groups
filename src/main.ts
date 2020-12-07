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

