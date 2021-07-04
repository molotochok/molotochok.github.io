import { WorkExperience } from '@models/work-experience.model';
import { Component, Input, OnInit } from '@angular/core';
import { I18nKeys } from '@models/consts/i18n-keys.model';
import { WorkDurationService } from '@services/work-duration.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  @Input() workExperience: WorkExperience;
  @Input() pageName: string;

  workExperienceKeys = I18nKeys.AboutMe.workExperience;

  constructor(private workDurationService: WorkDurationService) { }

  ngOnInit() {}

  get i18nPath() {
    return [this.pageName, 'work-experiences', this.workExperience.key].join('/');
  }

  displayDate(): string {
    return this.workDurationService.displayDate(this.workExperience, this.pageName);
  }
}
