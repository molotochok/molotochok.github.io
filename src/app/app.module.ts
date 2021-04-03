import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '@router/app-routing.module';
import { AppComponent } from './app.component';
import { OpenapiMobileClientComponent } from '@pages/openapi-mobile-client/openapi-mobile-client.component';
import { HomeComponent } from '@pages/home/home.component';
import { I18nService } from '@services/i18n.service';
import { HttpClientModule } from '@angular/common/http';
import { I18nPipe } from '@pipes/i18n.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { DragAndScoreComponent } from './pages/drag-and-score/drag-and-score.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OpenapiMobileClientComponent,
    I18nPipe,
    HomeComponent,
    MenuComponent,
    DragAndScoreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [I18nService,I18nPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
