import { WorkExperience } from '@models/work-experience.model';
import { WorkDurationService } from '@services/work-duration.service';
import { Component, OnInit } from '@angular/core';
import { workExperiences } from './configs';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  pageName = 'about-me';
  workExperiences: WorkExperience[] = workExperiences;

  constructor(private workDurationService: WorkDurationService) { }

  ngOnInit(): void {
  }

  workExperiencesDuration() {
    const duration = this.workExperiences.reduce<number>((prev, curr, _, __) => {
      return this.workDurationService.monthDuration(curr.startDate, curr.endDate) + prev;
    }, 0);

    return this.workDurationService.displayDuration(duration, this.pageName);
  }

}
