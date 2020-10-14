import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@router/app-routing.module';
import { AppComponent } from './app.component';
import { OpenapiMobileClientComponent } from './pages/openapi-mobile-client/openapi-mobile-client.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    OpenapiMobileClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // TODO: Move materials modules into some module
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
