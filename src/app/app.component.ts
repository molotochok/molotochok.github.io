import { Component, OnInit } from '@angular/core';
import { I18nPipe } from '@pipes/i18n.pipe';
import { ThemeService } from '@services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'cv-app';

  constructor(
    private translator: I18nPipe,
    private themeService: ThemeService) 
  {}

  ngOnInit(): void {
    this.themeService.initTheme();
  }
}
