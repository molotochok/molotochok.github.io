import { I18nService } from '@services/i18n.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { languages, languagesI18nPath, themes, themesI18nPath, i18nSourcePath, i18nKeys } from './config';
import { SelectOption } from '@models/select.model';
import { ThemeService } from '@services/theme/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  i18nKeys = i18nKeys;
  i18nSourcePath = i18nSourcePath;

  languages: SelectOption[] = languages;
  currentLanguage: SelectOption;
  languagesI18nPath: string = languagesI18nPath;

  themes: SelectOption[] = themes;
  currentTheme: SelectOption;
  themesI18nPath: string = themesI18nPath;

  constructor(
    private modalService: NgbModal,
    private i18nService: I18nService,
    private themeService: ThemeService
  ) { }

  async ngOnInit(): Promise<any> {
    await this.initActiveLanguage();
    this.initActiveTheme();
  }

  open(): void {
    const options = {
      ariaLabelledBy: 'modal-settings',
      keyboard: false
    };

    this.modalService.open(this.modalContent, options);
  }

  /* Language */
  async initActiveLanguage() {
    const locale = await this.i18nService.getLocale();
    this.currentLanguage = this.languages.find(l => l.value === locale);
  }

  changeLanguage(language: SelectOption) {
    this.i18nService.changeLanguage(language.value);
    this.currentLanguage = language;
  }

  /* Theme */
  initActiveTheme() {
    const currentTheme = this.themeService.getCurrentTheme();
    const theme = this.themes.find(t => t.value === currentTheme);
    this.currentTheme = theme;
  }

  changeTheme(theme: SelectOption) {
    this.themeService.changeTheme(theme.value);
    this.currentTheme = theme;
  }
}
