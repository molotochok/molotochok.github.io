import { Video } from '@models/video.model';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-embed-video',
  templateUrl: './embed-video.component.html',
  styleUrls: ['./embed-video.component.scss']
})
export class EmbedVideoComponent implements OnInit {

  @Input() video: Video;

  safeUri: any;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeUri = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.uri);
  }
}
