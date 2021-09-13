import { ThemeTypes } from '@services/theme/theme';
import { I18nLocales } from '@models/consts/i18n-locales.model';
import { SelectOption } from '@models/select.model';

export const i18nKeys = {
  title: 'title',
  language: 'language',
  theme: 'theme'
};

export const i18nSourcePath = 'menu/settings';

const languagesPath = 'assets/images/languages/';
export const languages: SelectOption[] = [
  new SelectOption(languagesPath + I18nLocales.EN + '.png', I18nLocales.EN, I18nLocales.EN),
  new SelectOption(languagesPath + I18nLocales.UK + '.png', I18nLocales.UK, I18nLocales.UK)
];
export const languagesI18nPath = 'languages';

const themePath = 'assets/images/menu/';
export const themes: SelectOption[] = [
  new SelectOption(themePath + 'light.svg', ThemeTypes.light, 'light'),
  new SelectOption(themePath + 'dark.svg', ThemeTypes.dark, 'dark')
];
export const themesI18nPath = 'themes';
