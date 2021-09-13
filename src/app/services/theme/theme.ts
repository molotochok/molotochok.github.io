export enum ThemeTypes {
  light,
  dark,
}

/* Template: --c<from color>-<for what>  */
export interface Theme {
  '--app-background': string;
  '--app-text': string;
  '--app-light-text': string;
  '--app-primary': string;
  '--app-menu-item': string;
  '--app-menu-item-active': string;
  '--app-btn': string;
  '--app-chip': string;
  '--app-android': string;
}

export class LightTheme implements Theme {
  '--app-background' = '#eeeeee';
  '--app-text' = '#000000';
  '--app-light-text' = '#FFFFFF';
  '--app-primary' = '#388e3c';
  '--app-menu-item' = '#6abf69';
  '--app-menu-item-active' = '#eeeeee';
  '--app-btn' = '#ff5252';
  '--app-chip' = '#ffa270';
  '--app-android' = '#3BD580';
}

export class DarkTheme implements Theme {
  '--app-background' = '#303030';
  '--app-text' = '#FFFFFF';
  '--app-light-text' = '#FFFFFF';
  '--app-primary' = '#191919';
  '--app-menu-item' = '#3e4042';
  '--app-menu-item-active' = '#303030';
  '--app-btn' = '#3f51b5';
  '--app-chip' = '#c63f17';
  '--app-android' = '#3BD580';
}

export const THEMES = {
  [ThemeTypes.light]: new LightTheme(),
  [ThemeTypes.dark]: new DarkTheme()
};
