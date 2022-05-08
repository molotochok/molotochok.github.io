import { ChipGroup } from '@models/chip-group.model';
import { Media } from '@models/media.model';
import { Component, OnInit } from '@angular/core';
import { i18nKeys, itchioLink, mediaList, technologies, title } from './config';
import { IconStyleService } from '@services/icon-style.service';

@Component({
  selector: 'app-draw-on-time',
  templateUrl: './draw-on-time.component.html',
  styleUrls: ['./draw-on-time.component.scss']
})
export class DrawOnTimeComponent implements OnInit {

  title: string = title;
  itchioLink: string = itchioLink;
  i18nKeys: any = i18nKeys;
  technologies: ChipGroup[] = technologies;
  mediaList: Media[] = mediaList;

  get i18nSourcePath() {
    return 'draw-on-time';
  }

  get descriptioni18nPath() {
    return this.i18nSourcePath + '/description';
  }

  get technologiesi18nPath() {
    return this.i18nSourcePath + '/technologies';
  }

  constructor() {}

  ngOnInit(): void {
  }
}
