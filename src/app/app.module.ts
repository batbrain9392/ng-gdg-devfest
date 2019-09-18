import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { pages } from './pages';
import { components, entryComponents } from './shared/components';
import { directives } from './shared/directives';

@NgModule({
  declarations: [AppComponent, ...pages, ...components, ...directives],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  entryComponents: [...entryComponents],
  bootstrap: [AppComponent]
})
export class AppModule {}
