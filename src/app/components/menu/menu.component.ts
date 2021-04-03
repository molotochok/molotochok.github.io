import { Language } from '@models/language.model';
import { MenuItem } from '@models/menu-item.model';
import { ROUTES } from '@router/app-routing.module';
import { I18nService } from '@services/i18n.service';
import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private i18nService: I18nService) { }

  public menu: MenuItem[];
  public languages: Language[] = [
    new Language("en", "english.png", false),
    new Language("es", "spanish.png", false),
    new Language("uk", "ukrainian.png", false),
  ];

  ngOnInit(): void {
    this.menu = ROUTES.map<MenuItem>(r => 
      new MenuItem(r.data.title, r.path)
    );

    this.initActiveLanguage();
  }

  isActivePage(item: MenuItem): boolean {
    return ("/" + item.pathname) === window.location.pathname;
  }

  initActiveLanguage(): void {
    const locale = this.i18nService.getLocale();
    const language = this.languages.find(l => l.locale === locale);
    
    if(language) {
      language.active = true;
    }
  }

  getLanguageFilePath(language: Language) {
    return "assets/images/languages/" + language.fileName;
  }

  chooseLanguage(language: Language) {
    this.languages.forEach(l => l.active = false);
    language.active = true;

    this.i18nService.changeLanguage(language.locale);
  }
}
