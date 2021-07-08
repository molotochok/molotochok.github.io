export enum ThemeTypes {
  light,
  dark,
}

/* Template: --c<from color>-<for what>  */
export interface Theme {
  '--app-main': string;
  '--app-text': string;
  '--app-menu': string;
  '--app-menu-item': string;
  '--app-menu-item-active': string;
  '--app-btn': string;
  '--app-chip': string;
}

export class LightTheme implements Theme {
  '--app-main' = '#eeeeee';
  '--app-text' = '#000000';
  '--app-menu' = '#0064b7';
  '--app-menu-item' = '#64c1ff';
  '--app-menu-item-active' = '#eeeeee';
  '--app-btn' = '#ff5252';
  '--app-chip' = '#ffb04c';
}

export class DarkTheme implements Theme {
  '--app-main' = '#303030';
  '--app-text' = '#FFFFFF';
  '--app-menu' = '#191919';
  '--app-menu-item' = '#3e4042';
  '--app-menu-item-active' = '#303030';
  '--app-btn' = '#3f51b5';
  '--app-chip' = '#bc5100';
}

export const THEMES = {
  [ThemeTypes.light]: new LightTheme(),
  [ThemeTypes.dark]: new DarkTheme()
};
