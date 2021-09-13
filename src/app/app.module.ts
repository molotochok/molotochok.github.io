import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';

import { AppRoutingModule } from '@router/app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { I18nPipe } from '@pipes/i18n.pipe';

import { AboutMeComponent } from '@pages/about-me/about-me.component';
import { OpenapiMobileClientComponent } from '@pages/openapi-mobile-client/openapi-mobile-client.component';
import { DragAndScoreComponent } from '@pages/drag-and-score/drag-and-score.component';


import { DateDurationService } from '@services/work-duration.service';
import { ThemeService } from '@services/theme/theme.service';
import { IconStyleService } from '@services/icon-style.service';
import { I18nService } from '@services/i18n.service';

import { MenuComponent } from '@components/menu/menu.component';
import { ListTileComponent } from '@components/list-tile/list-tile.component';
import { ListTilesComponent } from '@components/list-tiles/list-tiles.component';
import { ChipComponent } from '@components/chip/chip.component';
import { ChipsComponent } from '@components/chips/chips.component';
import { GroupComponent } from '@components/group/group.component';
import { EmbedVideoComponent } from '@components/embed-video/embed-video.component';
import { DasDemoComponent } from '@components/das-demo/das-demo.component';
import { GalleryComponent } from '@components/gallery/gallery.component';
import { SettingsComponent } from '@components/settings/settings.component';
import { SelectComponent } from '@components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    OpenapiMobileClientComponent,
    I18nPipe,
    MenuComponent,
    DragAndScoreComponent,
    ListTileComponent,
    ListTilesComponent,
    ChipComponent,
    ChipsComponent,
    GroupComponent,
    EmbedVideoComponent,
    DasDemoComponent,
    GalleryComponent,
    SettingsComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    NgbModule
  ],
  providers: [I18nService, ThemeService, DateDurationService, I18nPipe, IconStyleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
