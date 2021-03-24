import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule }              from './app.module';
import { ready } from "@jsplumbtoolkit/browser-ui";

if (environment.production) {
    enableProdMode();
}

ready(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});

