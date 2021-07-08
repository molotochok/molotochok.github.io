import { Component, OnInit } from '@angular/core';
import { educations, skills, workExperiences } from './configs';
import { ListTile} from '@/app/models/list-tile.model';
import { ChipGroup } from '@/app/models/chip-group.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  pageName = 'about-me';

  skills: ChipGroup[] = skills;
  workExperiences: ListTile[] = workExperiences;
  educations: ListTile[] = educations;

  get skillsPageName() {
    return this.pageName + '/skills';
  }

  get workExperiencesPageName() {
    return this.pageName + '/work-experiences';
  }

  get educationsPageName() {
    return this.pageName + '/educations';
  }

  constructor() { }

  ngOnInit(): void { }
}
