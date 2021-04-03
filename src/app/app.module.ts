import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@router/app-routing.module';
import { AppComponent } from './app.component';
import { OpenapiMobileClientComponent } from './pages/openapi-mobile-client/openapi-mobile-client.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { I18nService } from '@services/i18n.service';
import { HttpClientModule } from '@angular/common/http';
import { I18nPipe } from './pipes/i18n.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OpenapiMobileClientComponent,
    I18nPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // TODO: Move materials modules into some module
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [I18nService,I18nPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
