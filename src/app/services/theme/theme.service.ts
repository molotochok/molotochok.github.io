import { Injectable } from '@angular/core';
import cssVars from 'css-vars-ponyfill';
import { THEMES, ThemeTypes } from './theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private localStorageKey = 'theme';

  getCurrentTheme(): ThemeTypes {
    return ThemeTypes[localStorage.getItem(this.localStorageKey)];
  }

  initTheme() {
    let theme = this.getCurrentTheme();

    if (!theme) {
      theme = ThemeTypes.light;
    }

    this.changeTheme(theme);
  }

  changeTheme(theme: ThemeTypes) {
    localStorage.setItem(this.localStorageKey, ThemeTypes[theme]);

    cssVars({
      variables: JSON.parse(JSON.stringify(THEMES[theme])),
      shadowDOM: true,
    });
  }
}
