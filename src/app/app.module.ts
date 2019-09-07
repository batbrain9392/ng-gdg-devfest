import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { components, entryComponents } from './shared/components';
import { pages } from './pages';

@NgModule({
  declarations: [AppComponent, ...components, ...pages],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  entryComponents: [...entryComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
