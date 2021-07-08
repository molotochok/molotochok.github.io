import { ListTile } from '@models/list-tile.model';
import { DateDurationService } from '@services/work-duration.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-tiles',
  templateUrl: './list-tiles.component.html',
  styleUrls: ['./list-tiles.component.scss']
})
export class ListTilesComponent implements OnInit {
  @Input() title: string;
  @Input() listTiles: ListTile[];
  @Input() i18nSourcePath: ListTile[];
  @Input() showAllDuration = true;
  @Input() showTileDuration = true;

  constructor(private dateDurationService: DateDurationService) { }

  ngOnInit(): void { }

  allDuration() {
    if (!this.showAllDuration) {
      return null;
    }

    const duration = this.listTiles.reduce<number>((prev, curr, _, __) => {
      return this.dateDurationService.monthDuration(curr.startDate, curr.endDate) + prev;
    }, 0);

    return this.dateDurationService.displayDuration(duration);
  }
}
