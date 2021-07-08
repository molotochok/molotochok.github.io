import { ChipGroup } from '@models/chip-group.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.scss']
})
export class ChipsComponent implements OnInit {

  @Input() i18nSourcePath: string;
  @Input() groups: ChipGroup[];
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
