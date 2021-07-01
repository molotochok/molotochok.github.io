import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@router/app-routing.module';
import { AppComponent } from './app.component';
import { OpenapiMobileClientComponent } from '@pages/openapi-mobile-client/openapi-mobile-client.component';
import { AboutMeComponent } from '@/app/pages/about-me/about-me.component';
import { I18nService } from '@services/i18n.service';
import { HttpClientModule } from '@angular/common/http';
import { I18nPipe } from '@pipes/i18n.pipe';
import { MenuComponent } from '@components/menu/menu.component';
import { DragAndScoreComponent } from '@pages/drag-and-score/drag-and-score.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    OpenapiMobileClientComponent,
    I18nPipe,
    MenuComponent,
    DragAndScoreComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [I18nService, I18nPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
