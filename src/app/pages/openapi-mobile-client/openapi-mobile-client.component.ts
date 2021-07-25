import { ChipGroup } from '@models/chip-group.model';
import { Media } from '@models/media.model';
import { IconStyleService } from '@services/icon-style.service';
import { Component, OnInit } from '@angular/core';
import { i18nKeys, technologies, title, mediaList } from './config';

@Component({
  selector: 'app-openapi-mobile-client',
  templateUrl: './openapi-mobile-client.component.html',
  styleUrls: ['./openapi-mobile-client.component.scss']
})
export class OpenapiMobileClientComponent implements OnInit {

  title: string = title;
  i18nKeys: any = i18nKeys;
  technologies: ChipGroup[] = technologies;
  mediaList: Media[] = mediaList;
  downloadIconStyle: {};

  get i18nSourcePath() {
    return 'openapi-mobile-client';
  }

  get descriptioni18nPath() {
    return this.i18nSourcePath + '/description';
  }

  get technologiesi18nPath() {
    return this.i18nSourcePath + '/technologies';
  }

  constructor(private iconStyleService: IconStyleService) {}

  ngOnInit(): void {
    this.initDownloadIconStyle();
  }

  initDownloadIconStyle(): void {
    this.downloadIconStyle = this.iconStyleService.getStyleWithMask('assets/images/drag-and-score/android.svg');
  }
}
