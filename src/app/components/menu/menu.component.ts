import { Language } from '@models/language.model';
import { MenuItem } from '@models/menu-item.model';
import { ROUTES } from '@router/app-routing.module';
import { I18nService } from '@services/i18n.service';
import { Component, OnInit  } from '@angular/core';
import { ThemeService } from '@services/theme/theme.service';
import { ThemeTypes } from '@/app/services/theme/theme';
import { Theme } from '@/app/models/theme.model';
import { I18nLocales } from '@/app/models/consts/i18n-locales.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isMenuVisible = true;

  public menu: MenuItem[];
  public languages: Language[] = [
    // TODO: locale magic string fix
    new Language(I18nLocales.EN, 'english.png', false),
    new Language(I18nLocales.ES, 'spanish.png', false),
    new Language(I18nLocales.UK, 'ukrainian.png', false),
  ];

  public themes: Theme[] = [
    {
      src: 'assets/images/menu/light.svg',
      type: ThemeTypes.light,
      active: false
    },
    {
      src: 'assets/images/menu/dark.svg',
      type: ThemeTypes.dark,
      active: false
    },
  ];

  constructor(
    private i18nService: I18nService,
    private themeService: ThemeService
  ) { }

  ngOnInit(): void {
    this.menu = ROUTES.map<MenuItem>(r =>
      new MenuItem(r.data.title, r.path)
    );

    this.initActiveLanguage();
    this.initActiveTheme();
  }

  /* Navigation */
  isActivePage(item: MenuItem): boolean {
    return ('/' + item.pathname) === window.location.pathname;
  }

  getMenuItemLogoSrc(item: MenuItem): string {
    const pathname = item.pathname ? item.pathname : 'about-me';
    return `assets/images/${pathname}/logo.png`;
  }

  /* Lannguage */
  async initActiveLanguage() {
    const locale = await this.i18nService.getLocale();
    const language = this.languages.find(l => l.locale === locale);
    language.active = true;
  }

  changeLanguage(language: Language) {
    this.languages.forEach(l => l.active = (l.locale === language.locale));
    this.i18nService.changeLanguage(language.locale);
  }

  /* Theme */
  initActiveTheme() {
    const currentTheme = this.themeService.getCurrentTheme();
    const theme = this.themes.find(t => t.type === currentTheme);
    theme.active = true;
  }

  changeTheme(type: ThemeTypes) {
    this.themes.forEach(t => t.active = (t.type === type));
    this.themeService.changeTheme(type);
  }
}
