import { ListTile } from '@models/list-tile.model';
import { Component, Input, OnInit } from '@angular/core';
import { I18nKeys } from '@models/consts/i18n-keys.model';
import { DateDurationService } from '@/app/services/work-duration.service';
import { I18nService } from '@services/i18n.service';

@Component({
  selector: 'app-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.scss']
})
export class ListTileComponent implements OnInit {
  @Input() showDuration = true;
  @Input() listTile: ListTile;
  @Input() i18nSourcePath: string;

  constructor(
    private dateDurationService: DateDurationService,
    private i18nService: I18nService
  ) { }

  ngOnInit() { }

  get i18nPath() {
    return `${this.i18nSourcePath}/${this.listTile.key}`;
  }

  displayDate(): string {
    const { startDate, endDate } = this.listTile;
    return this.dateDurationService.displayDate(startDate, endDate, this.showDuration);
  }

  getValue(key: string) {
    return this.listTile.useI18n
      ? this.i18nService.getTranslation(`${this.i18nPath}/${key}`)
      : key;
  }

  getSubtitle() {
    return [
      this.getValue(this.listTile.subtitle1),
      this.getValue(this.listTile.subtitle2),
    ].join(', ');
  }
}
