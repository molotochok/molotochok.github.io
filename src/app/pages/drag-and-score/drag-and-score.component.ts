import { Video } from '@models/video.model';
import { Component, OnInit } from '@angular/core';
import { i18nKeys, title, video } from './config';

@Component({
  selector: 'app-drag-and-score',
  templateUrl: './drag-and-score.component.html',
  styleUrls: ['./drag-and-score.component.scss']
})
export class DragAndScoreComponent implements OnInit {

  title: string = title;
  video: Video = video;
  i18nKeys: any = i18nKeys;

  i18nSourcePath = 'drag-and-score';

  get descriptioni18nPath() {
    return this.i18nSourcePath + '/description';
  }

  ngOnInit(): void {
  }

}
