import { Language } from '@models/language.model';
import { MenuItem } from '@models/menu-item.model';
import { ROUTES } from '@router/app-routing.module';
import { I18nService } from '@services/i18n.service';
import { Component, OnInit  } from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger("showHideTrigger", [
      transition('void => *', [
        style({ "transform": 'translateX(-100%)', "margin-right":"-150px" }),
        animate(350)
      ]),
      transition('* => void', [
        animate(350, style({ transform: 'translateX(-100%)', "margin-right":"-150px"}))
      ])
    ])
  ]
})
export class MenuComponent implements OnInit {
  isMenuVisible = true;

  public menu: MenuItem[];
  public languages: Language[] = [
    new Language("en", "english.png", false),
    new Language("es", "spanish.png", false),
    new Language("uk", "ukrainian.png", false),
  ];

  constructor(private i18nService: I18nService) { }

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

  getMenuItemLogoSrc(item: MenuItem): string {
    const pathname = item.pathname ? item.pathname : "about-me";
    return `assets/images/${pathname}/logo.png`;
  }

  getLanguageFilePath(language: Language) {
    return "assets/images/languages/" + language.fileName;
  }

  chooseLanguage(language: Language) {
    this.languages.forEach(l => l.active = false);
    language.active = true;

    this.i18nService.changeLanguage(language.locale);
  }

  toggleMenuVisibility(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
}
