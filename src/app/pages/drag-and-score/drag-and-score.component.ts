import { Component, OnInit } from '@angular/core';
import { i18nKeys, playStoreLink, technologies, title, mediaList } from './config';
import { ChipGroup } from '@models/chip-group.model';
import { IconStyleService } from '@services/icon-style.service';
import { Media } from '@models/media.model';

@Component({
  selector: 'app-drag-and-score',
  templateUrl: './drag-and-score.component.html',
  styleUrls: ['./drag-and-score.component.scss']
})
export class DragAndScoreComponent implements OnInit {

  title: string = title;
  playStoreLink: string = playStoreLink;
  i18nKeys: any = i18nKeys;
  technologies: ChipGroup[] = technologies;
  mediaList: Media[] = mediaList;

  get i18nSourcePath() {
    return 'drag-and-score';
  }

  get descriptioni18nPath() {
    return this.i18nSourcePath + '/description';
  }

  get technologiesi18nPath() {
    return this.i18nSourcePath + '/technologies';
  }

  get downloadIconStyle() {
    return this.iconStyleService.getStyleWithMask('assets/images/drag-and-score/android.svg');
  }

  constructor(private iconStyleService: IconStyleService) {}

  ngOnInit(): void {}
}
