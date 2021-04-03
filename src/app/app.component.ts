import { Component } from '@angular/core';
import { I18nPipe } from '@pipes/i18n.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cv-app';

  constructor(private translator: I18nPipe) {}
}
