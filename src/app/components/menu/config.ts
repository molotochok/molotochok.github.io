import { ThemeTypes } from '@services/theme/theme';
import { Theme } from '@models/theme.model';
import { Language } from '@models/language.model';
import { I18nLocales } from '@models/consts/i18n-locales.model';

export const languages: Language[] = [
  new Language(I18nLocales.EN, 'english.png', false),
  new Language(I18nLocales.UK, 'ukrainian.png', false),
];

export const themes: Theme[] = [
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
