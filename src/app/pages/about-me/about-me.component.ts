import { Component, OnInit } from '@angular/core';
import { educations, workExperiences } from './configs';
import { ListTile} from '@/app/models/list-tile.model';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  pageName = 'about-me';

  workExperiences: ListTile[] = workExperiences;
  educations: ListTile[] = educations;

  get workExperiencePageName() {
    return this.pageName + '/work-experiences';
  }

  get educationPageName() {
    return this.pageName + '/education';
  }

  constructor() { }

  ngOnInit(): void { }
}
