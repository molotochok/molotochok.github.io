import { Video } from '@models/video.model';
import { Component, OnInit } from '@angular/core';
import { i18nKeys, playStoreLink, technologies, title, video } from './config';
import { ChipGroup } from '@/app/models/chip-group.model';

@Component({
  selector: 'app-drag-and-score',
  templateUrl: './drag-and-score.component.html',
  styleUrls: ['./drag-and-score.component.scss']
})
export class DragAndScoreComponent implements OnInit {

  title: string = title;
  playStoreLink: string = playStoreLink;
  video: Video = video;
  i18nKeys: any = i18nKeys;
  technologies: ChipGroup[] = technologies;

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
    const icon = 'assets/images/drag-and-score/android.svg';
    const mask = `url('${icon}') no-repeat center`;
    return { mask, '-webkit-mask': mask };
  }

  ngOnInit(): void {}
}
